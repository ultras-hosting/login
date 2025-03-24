<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Splashy Panel - Login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        :root {
            --primary-color: #ff4655;
            --secondary-color: #0f1923;
            --bg-dark: #1c252e;
            --bg-input: #222f3d;
            --text-light: #ffffff;
            --text-muted: #8b939e;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background-color: var(--secondary-color);
            color: var(--text-light);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
            background-image: radial-gradient(circle at 20% 20%, rgba(255, 70, 85, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255, 70, 85, 0.1) 0%, transparent 40%);
        }

        .login-container {
            background: var(--bg-dark);
            padding: 40px;
            border-radius: 12px;
            width: 400px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            text-align: center;
            border: 1px solid rgba(255, 70, 85, 0.2);
            position: relative;
            overflow: hidden;
            transform: translateY(20px);
            opacity: 0;
            animation: fadeIn 0.6s ease forwards;
        }

        @keyframes fadeIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .login-container::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            height: 3px;
            background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
        }

        .logo {
            margin-bottom: 20px;
            position: relative;
        }

        .logo i {
            font-size: 32px;
            color: var(--primary-color);
            display: inline-block;
            margin-right: 10px;
            transform: translateY(5px);
        }

        .logo h2 {
            font-size: 28px;
            font-weight: 700;
            color: var(--text-light);
            display: inline-block;
            letter-spacing: 1px;
        }

        .logo h2 span {
            color: var(--primary-color);
        }

        .input-group {
            margin-bottom: 20px;
            text-align: left;
            position: relative;
        }

        .input-group label {
            font-size: 14px;
            color: var(--text-muted);
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            transition: 0.3s;
        }

        .input-group i {
            position: absolute;
            left: 12px;
            top: 38px;
            color: var(--text-muted);
            transition: 0.3s;
        }

        .input-group input {
            width: 100%;
            padding: 12px 12px 12px 40px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            background: var(--bg-input);
            color: var(--text-light);
            font-size: 14px;
            transition: all 0.3s ease;
        }

        .input-group input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(255, 70, 85, 0.2);
        }

        .input-group input:focus+i {
            color: var(--primary-color);
        }

        .password-toggle {
            position: absolute;
            right: 12px;
            top: 38px;
            color: var(--text-muted);
            cursor: pointer;
            transition: 0.3s;
        }

        .password-toggle:hover {
            color: var(--primary-color);
        }

        .login-btn {
            width: 100%;
            background: var(--primary-color);
            padding: 14px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            color: var(--text-light);
            cursor: pointer;
            transition: 0.3s;
            position: relative;
            overflow: hidden;
            letter-spacing: 0.5px;
        }

        .login-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: 0.5s;
        }

        .login-btn:hover {
            background: #d93c4b;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 70, 85, 0.4);
        }

        .login-btn:hover::before {
            left: 100%;
        }

        .login-btn:active {
            transform: translateY(0);
        }

        .loading-spinner {
            display: none;
            margin: 20px auto;
            position: relative;
            width: 40px;
            height: 40px;
        }

        .loading-spinner i {
            font-size: 24px;
            color: var(--primary-color);
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: var(--text-muted);
            opacity: 0.7;
        }

        .options {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            font-size: 13px;
        }

        .remember-me {
            display: flex;
            align-items: center;
        }

        .remember-me input {
            margin-right: 5px;
            accent-color: var(--primary-color);
        }

        .forgot-password {
            color: var(--text-muted);
            text-decoration: none;
            transition: 0.3s;
        }

        .forgot-password:hover {
            color: var(--primary-color);
        }

        .or-divider {
            display: flex;
            align-items: center;
            margin: 20px 0;
        }

        .or-divider::before,
        .or-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background-color: rgba(255, 255, 255, 0.1);
        }

        .or-divider span {
            padding: 0 10px;
            color: var(--text-muted);
            font-size: 14px;
        }

        .social-login {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        .social-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--bg-input);
            color: var(--text-light);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: 0.3s;
            cursor: pointer;
        }

        .social-btn:hover {
            background: var(--primary-color);
            transform: translateY(-3px);
        }

        .signup-link {
            margin-top: 20px;
            font-size: 14px;
            color: var(--text-muted);
        }

        .signup-link a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
            transition: 0.3s;
        }

        .signup-link a:hover {
            text-decoration: underline;
        }

        .success-message {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-dark);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            animation: fadeIn 0.5s ease;
        }

        .success-icon {
            font-size: 60px;
            color: #4CAF50;
            margin-bottom: 20px;
        }

        .success-text {
            font-size: 22px;
            font-weight: 600;
            color: var(--text-light);
            margin-bottom: 10px;
        }

        .success-subtext {
            font-size: 14px;
            color: var(--text-muted);
        }

        @media (max-width: 480px) {
            .login-container {
                width: 90%;
                padding: 30px;
            }
            .logo h2 {
                font-size: 24px;
            }
        }
    </style>
</head>

<body>
    <div class="login-container">
        <div class="logo">
            <i class="fas fa-gamepad"></i>
            <h2>Splashy <span>Panel</span></h2>
        </div>

        <form id="login-form">
            <div class="input-group">
                <label for="username">Email</label>
                <input type="text" id="username" required>
                <i class="fas fa-user"></i>
            </div>

            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" required>
                <i class="fas fa-lock"></i>
                <div class="password-toggle" id="password-toggle">
                    <i class="fas fa-eye"></i>
                </div>
            </div>

            <div class="options">
                <div class="remember-me">
                    <input type="checkbox" id="remember" checked>
                    <label for="remember">Remember me</label>
                </div>
                <a href="https://discord.gg/mgNph6f5" class="forgot-password">Join Discord</a>
            </div>

            <button type="submit" class="login-btn">
                <span>Login</span>
            </button>
        </form>

        <div class="loading-spinner" id="loading-spinner">
            <i class="fas fa-spinner fa-spin"></i>
        </div>




        <div class="footer">&copy; 2025 Splashy Panel. All rights reserved.</div>

        <div class="success-message" id="success-message">
            <i class="fas fa-check-circle success-icon"></i>
            <div class="success-text">Login Successful!</div>
            <div class="success-subtext">Redirecting to dashboard...</div>
        </div>
    </div>

    <script>
        // Toggle password visibility
        document.getElementById('password-toggle').addEventListener('click', function() {
            const passwordInput = document.getElementById('password');
            const passwordIcon = this.querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                passwordIcon.classList.remove('fa-eye');
                passwordIcon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                passwordIcon.classList.remove('fa-eye-slash');
                passwordIcon.classList.add('fa-eye');
            }
        });

        // Form submission
        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const loginBtn = document.querySelector('.login-btn');
            const loadingSpinner = document.getElementById('loading-spinner');
            const successMessage = document.getElementById('success-message');

            // Disable button and show loading
            loginBtn.disabled = true;
            loginBtn.style.opacity = '0.7';
            loginBtn.innerHTML = 'Logging in...';
            loadingSpinner.style.display = 'block';

            // Simulate API call
            setTimeout(() => {
                loadingSpinner.style.display = 'none';
                successMessage.style.display = 'flex';

                // Redirect after success
                setTimeout(() => {
                    window.location.href = '#dashboard';
                }, 2000);
            }, 2000);
        });

        // Add input focus effects
        const inputs = document.querySelectorAll('.input-group input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-2px)';
                this.parentElement.querySelector('label').style.color = '#ff4655';
            });

            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
                if (!this.value) {
                    this.parentElement.querySelector('label').style.color = '#8b939e';
                }
            });
        });

        // Add subtle animation to form elements
        const formElements = document.querySelectorAll('.input-group, .options, .login-btn, .or-divider, .social-login, .signup-link');
        formElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            setTimeout(() => {
                element.style.transition = 'all 0.4s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100 + (index * 100));
        });
    </script>
    <script>
        (function() {
            function c() {
                var b = a.contentDocument || a.contentWindow.document;
                if (b) {
                    var d = b.createElement('script');
                    d.innerHTML = "window.__CF$cv$params={r:'924a32a1df25e175',t:'MTc0MjY5Mzc4Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
                    b.getElementsByTagName('head')[0].appendChild(d)
                }
            }
            if (document.body) {
                var a = document.createElement('iframe');
                a.height = 1;
                a.width = 1;
                a.style.position = 'absolute';
                a.style.top = 0;
                a.style.left = 0;
                a.style.border = 'none';
                a.style.visibility = 'hidden';
                document.body.appendChild(a);
                if ('loading' !== document.readyState) c();
                else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
                else {
                    var e = document.onreadystatechange || function() {};
                    document.onreadystatechange = function(b) {
                        e(b);
                        'loading' !== document.readyState && (document.onreadystatechange = e, c())
                    }
                }
            }
        })();
    </script>
</body>

</html>
