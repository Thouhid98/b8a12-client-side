import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const { user } = useContext(AuthContext)
    // const navigate = useNavigate() 

    // Load All Camp Data 
    const [campRegister, setRegister] = useState([])
    console.log(campRegister);
    const totalPrice = campRegister?.reduce((total, item) => total + item.campfee, 0)
    console.log(totalPrice);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`/registered-camps/${user.email}`);
                setRegister(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // Confirm Payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'Anonimous',
                    email: user?.email || 'Anonimous'
                }
            }
        })
        if (confirmError) {
            console.log(confirmError);
        }
        else {
            if (paymentIntent.status === 'succeeded') {
                console.log('Transaction Id', paymentIntent.id);
                setTransactionId(paymentIntent.id)

                // Now save Payment History in the database 
                const payment = {
                    email: user.email,
                    campfee: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    registerId: campRegister.map(item => item._id),
                    campId: campRegister.map(item => item.campId),
                    status: 'Accepted'
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('Payment Saved',res.data);
                // refetch()
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for Parchase",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // navigate('/dashboard/paymenthistory')
                }
            }
        }


    }

    return (
        <div className="m-20">
            <h2 className="text-5xl lg:w-[420px] lg:ml-[220px]  text-orange-400 font-bold mb-10 border-y-4 p-3 text-center">Payment</h2>

            <form  onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-outline btn-secondary my-3" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>

                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-600">Payment Successul. Your Transaction Id: {transactionId}</p>}


            </form>
        </div>
    );
};

export default CheckoutForm;