"use client"

import styles from './style.module.css';

export default function Login(props) {
    return (
        <section className={styles.login}>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="email" id="email" name="email" />
                </div> 
                <div>
                    <label htmlFor="password">Password</label>
                    <br/>                    
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </section>
    );
}