import React from 'react'
import styles from './Portfolio.module.css'
import { Tilt } from 'react-tilt'

const settingTilt = {
	reverse: rue,  
	scale: 1.1,   
	speed: 2000,
    transition: true
}

function Portfolio() {
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolio</h3>
        <div className={styles.port_list}>
            <div className={styles.port_items}>
                <Tilt option={settingTilt}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Tilt>
                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt options={settingTilt}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Tilt>                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt options={settingTilt}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Tilt>                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt options={settingTilt}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Tilt>                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt options={settingTilt}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Tilt>                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt options={settingTilt}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Tilt>                <p>Project Title</p>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
