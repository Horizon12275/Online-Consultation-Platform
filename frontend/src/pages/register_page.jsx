import React from "react";
import {Button, Checkbox, Input} from "antd";
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import { Link } from 'react-router-dom';
function RegisterPage(){
    const containerStyle = {
        width: '50%',
        height: '90vh', // 调整容器高度，使其占据更多垂直空间
        position: 'fixed',
        top: 0,
        right: 0, // 调整位置为左上角
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px', // 增加内边距，提供更多空间
    };

    const inputStyle = {
        marginBottom: '25px', // 增加纵向间距
        width: '60%', // 设置宽度为60%
    };

    const labelStyle = {
        marginBottom: '15px', // 增加纵向间距
        textAlign: 'left',
    };

    const subtitleStyle = {
        fontSize: '1.2em',
        marginBottom: '30px',
    };

    const linkStyle = {
        textDecoration: 'underline', // 添加下划线效果
        cursor: 'pointer', // 修改鼠标样式为手型，表明可以点击
    };

    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2020/12/18/00/43/medical-5840876_1280.png" alt="Login Image" style={{ position: 'fixed', left: 0, top: 0, width: '50%', height: '100vh', objectFit: 'cover' }} />
            <div style={containerStyle}>
                <div className="title" style={{fontSize: '2em', marginBottom: '20px'}}>SIGN UP</div>
                <div className="subtitle" style={subtitleStyle}>
                    If you already have an account, you can <a href="/login" style={linkStyle}>LOGIN HERE</a>!
                </div>
                <div className="input-container" style={inputStyle}>
                    <label style={labelStyle}>Email</label>
                    <Input prefix={<MailOutlined/>} placeholder="Enter your email address"/>
                </div>
                <div className="input-container" style={inputStyle}>
                    <label style={labelStyle}>Verification Code</label>
                    <Input prefix={<MailOutlined/>} placeholder="Enter the verification code you've received"/>
                </div>
                <div className="input-container" style={inputStyle}>
                    <label style={labelStyle}>Username</label>
                    <Input prefix={<UserOutlined/>} placeholder="Enter your username"/>
                </div>
                <div className="input-container" style={inputStyle}>
                    <label style={labelStyle}>Password</label>
                    <Input prefix={<LockOutlined/>} type="password" placeholder="Password"/>
                </div>
                <div className="input-container" style={inputStyle}>
                    <label style={labelStyle}>Confirm Password</label>
                    <Input prefix={<LockOutlined/>} type="password" placeholder="Confirm your Password"/>
                </div>
                <div className="input-container" style={{...inputStyle}}>
                    <div style={{marginBottom: '10px'}}>
                        <Checkbox>I want to request for an <a href="/become_expert" style={linkStyle}>EXPERT ACCOUNT</a> now</Checkbox>
                    </div>
                    <div>
                    <Checkbox>I've read the <a href="/user_agreement" style={linkStyle}>User Agreement and Privacy Policy</a> </Checkbox>
                    </div>
                </div>
                <div className="register-btn" style={inputStyle}>
                    <Link to="/login">
                        <Button type="primary">Register</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;