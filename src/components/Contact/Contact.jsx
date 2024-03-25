import { useState } from 'react'
import { useEffect, useRef } from 'react'
import { Section } from '../'

import Gmail from '../../assests/Gmail.png'
import Phone from '../../assests/Phone.png'
import { sendForm } from '@emailjs/browser'

const Contact = () => {
    const ref = useRef()
    const [sent, setSent] = useState(false)
    const [disableBtn , setDisableBtn] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault()

        sendForm('service_xapwcof', 'template_03b6eui', ref.current, {
            publicKey: '35-CDbzocxSmC1z0n',
        })
            .then(
                () => {
                    ref.current.reset();
                    setSent(true);

                    setTimeout(() => {
                        setSent(false);
                        setDisableBtn(false)
                    }, 800);
                },
                (error) => {
                    setSent(false);
                    setDisableBtn(false)
                },
            ).finally(() => {
                setDisableBtn(true)            
            });
    }

    return (
        <Section id="contact">
            <div className='relative w-full flex max-md:gap-20 max-md:flex-col mt-24 my-9'>
                <div className='md:w-1/2 flex-1'>
                    <h1 className='font-bold font-Balsamiq uppercase text-start text-white text-4xl xs:text-6xl my-6'>Get in Touch</h1>
                    <div className='mt-14 flex flex-col  justify-start'>
                        <div className='flex items-center justify-start gap-3 ss:gap-5'>
                            <img src={Phone} className='size-10' alt="" />
                            <span className='font-Code text-white font-bold text-2xl'>+92 3243290556</span>
                        </div>

                        <div className='mt-10 flex items-center justify-start gap-3 ss:gap-5'>
                            <img className='' src={Gmail} alt="" />
                            <span className='font-Code whitespace-normal text-white font-bold text-xs xs:text-lg ss:text-2xl'>mohammadyaseen.developer@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className='md:w-[40%]'>
                    <div className="form-card1">
                        <div className="form-card2">

                            <form ref={ref} onSubmit={sendEmail} className="form">
                                <p className="form-heading">Contact Me</p>

                                <div className="form-field">
                                    <input required
                                        name='from_name'
                                        placeholder="Name"
                                        className="input-field"
                                        type="text" />
                                </div>

                                <div className="form-field">
                                    <input
                                        required
                                        placeholder="Email"
                                        className="input-field"
                                        type="email"
                                        name='from_email'
                                    />
                                </div>

                                <div className="form-field">
                                    <textarea
                                        required
                                        placeholder="Message"
                                        cols="30"
                                        rows="3"
                                        name='message'
                                        className="input-field"
                                    ></textarea>
                                </div>

                                <button
                                    type='submit'
                                    value="Send"
                                    className={`${sent ? "text-blue-500" : ""} ${disableBtn ? "pointer-events-none" : "pointer-events-auto"} sendMessage-btn `}
                                >
                                    {sent ? 'Message Sent' : 'Send Message'}
                                </button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    )
}

export default Contact