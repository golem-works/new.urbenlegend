"use client";
import { useState } from "react";
import Header from './header';
import styles from '../../styles/contact.module.css';
import Link from 'next/link';
import Nav from './nav';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://www.urbenlegend.com/api/route", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message })
            });
            const jsonData = await response.json();
            alert("メッセージを送信しました");
        } catch (err) {
            alert("メッセージの送信に失敗しました");
        }
    };

    return (
        <>
        <Nav />
        <div className={styles.container}>
           
            <h1 className={styles.formTitle}>お問い合わせ</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="お名前" 
                    required 
                    className={styles.inputField} 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="メールアドレス" 
                    required 
                    className={styles.inputField} 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea 
                    placeholder="メッセージ" 
                    rows="10" 
                    required 
                    className={styles.textAreaField} 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className={styles.submitButton}>送信</button>
            </form>
        </div>
        </>
    );
};

export default Contact;