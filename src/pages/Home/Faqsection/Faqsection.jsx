import React from 'react';

const Faqsection = () => {
    return (
        <div>
            <section className="bg-blue-400 dark:text-gray-100 h-[400px] mt-10 mb-10">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracki text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is the primary objective of the "Vaccinate for Health" campaign, and how does it contribute to public health?</summary>
                            <div className="px-4 pb-4">
                                <p>The "Vaccinate for Health" campaign aims to promote widespread vaccination against preventable diseases. Its primary objective is to increase vaccination rates, providing immunity to individuals and contributing to community immunity. By doing so, the campaign helps prevent the spread of infectious diseases, protect vulnerable populations, and ultimately improve overall public </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does the "Screen Early, Save Lives" medical campaign raise awareness about the importance of early detection in cancer prevention?</summary>
                            <div className="px-4 pb-4">
                                <p>The "Screen Early, Save Lives" campaign focuses on educating the public about the significance of early cancer detection through regular screenings. By emphasizing the importance of routine check-ups and screenings, the campaign aims to detect cancer at its early stages when treatment is often more effective. This not only increases survival rates but also reduces the overall burden of the disease on individuals and healthcare systems.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What role does the "Mental Health Matters" campaign play in addressing the stigma associated with mental health issues, and how does it contribute to improved mental well-being?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                
                                <p>The "Mental Health Matters" campaign seeks to break down the stigma surrounding mental health and promote open conversations about mental well-being. By fostering awareness and understanding, the campaign encourages individuals to seek help when needed and promotes a supportive community. This contributes to improved mental health by creating an environment where individuals feel comfortable addressing mental health concerns, seeking treatment, and accessing the necessary support networks</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faqsection;