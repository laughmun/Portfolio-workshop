import React from 'react'
import styles from './Testimonials.module.css'
function Testimonials() {
  return (
    <div className={styles.testi_con}>
        <h3 className={styles.testi_title}>Testimonials</h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4>John Doe</h4>
                <h5>Web Developer</h5>
            </div>
            <div className={styles.testi_items}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h4>Jame Doe</h4>
                <h5>Web Developer</h5>
            </div>
            <div className={styles.testi_items}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                <img src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h4>Joe Doe</h4>
                <h5>Web Developer</h5>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
