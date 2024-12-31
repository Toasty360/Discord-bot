export const ToS = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zero - Terms of Service</title>
    <style>
        :root {
            --primary-color: #7289DA;
            --background-dark: #121212;
            --card-dark: #1E1E1E;
            --text-primary: #E0E0E0;
            --text-secondary: #B0B0B0;
            --accent-color: #5865F2;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: var(--background-dark);
            color: var(--text-primary);
        }

        header {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            padding: 40px 20px;
            text-align: center;
            border-bottom: 1px solid #333;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 20px;
        }

        section {
            margin: 30px auto;
            padding: 30px;
            background-color: var(--card-dark);
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.2s ease;
        }

        section:hover {
            transform: translateY(-2px);
        }

        h1 {
            font-size: 2.5em;
            margin: 0;
            color: var(--primary-color);
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        h2 {
            color: var(--primary-color);
            border-bottom: 2px solid var(--accent-color);
            padding-bottom: 10px;
            margin-top: 30px;
        }

        p {
            color: var(--text-secondary);
            line-height: 1.8;
            margin: 20px 0;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        ul li {
            margin: 15px 0;
            color: var(--text-secondary);
            padding-left: 25px;
            position: relative;
        }

        ul li:before {
            content: "•";
            color: var(--accent-color);
            position: absolute;
            left: 0;
            font-weight: bold;
        }

        .highlight-box {
            background: rgba(114, 137, 218, 0.1);
            border-left: 4px solid var(--primary-color);
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }

        footer {
            text-align: center;
            padding: 30px;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            color: var(--text-secondary);
            border-top: 1px solid #333;
            margin-top: 50px;
        }

        .contact-section {
            background: rgba(88, 101, 242, 0.05);
            border-radius: 12px;
            padding: 20px;
            margin-top: 20px;
        }

        .last-updated {
            font-size: 0.9em;
            color: var(--text-secondary);
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Zero - Terms of Service</h1>
            <p>Effective Date: January 1, 2024</p>
        </div>
    </header>
    
    <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>Welcome to Zero ("the Bot"). By using our services, you agree to these Terms of Service ("Terms"). Please read them carefully before using the Bot.</p>
            
            <div class="highlight-box">
                <p>Important: These Terms constitute a legally binding agreement between you and Zero Bot.</p>
            </div>

            <h2>Eligibility</h2>
            <p>To use the Bot, you must:</p>
            <ul>
                <li>Be at least 13 years old</li>
                <li>Have parental consent if under 18 years old</li>
                <li>Have a valid Discord account in good standing</li>
                <li>Comply with all applicable local laws and regulations</li>
            </ul>

            <h2>Premium Features</h2>
            <p>Zero offers both free and premium features. Premium features include:</p>
            <ul>
                <li>Advanced customization options</li>
                <li>Priority support response</li>
                <li>Extended command limits</li>
                <li>Custom bot appearances</li>
                <li>Advanced analytics and reporting</li>
            </ul>

            <h2>Acceptable Use Policy</h2>
            <p>When using Zero, you agree not to:</p>
            <ul>
                <li>Attempt to bypass any rate limits or security measures</li>
                <li>Use the Bot to distribute spam, malware, or harmful content</li>
                <li>Impersonate other users or entities</li>
                <li>Sell, trade, or transfer your access to premium features</li>
                <li>Use the Bot for any illegal or unauthorized purpose</li>
            </ul>

            <h2>Data Collection and Privacy</h2>
            <div class="highlight-box">
                <p>We collect and process the following data:</p>
                <ul>
                    <li>Discord user ID and username</li>
                    <li>Server configurations and preferences</li>
                    <li>Command usage statistics</li>
                    <li>Error logs and performance metrics</li>
                </ul>
            </div>

            <h2>Security Measures</h2>
            <p>We implement various security measures to protect your data:</p>
            <ul>
                <li>End-to-end encryption for sensitive data</li>
                <li>Regular security audits and updates</li>
                <li>Secure data storage and transmission</li>
                <li>Limited employee access to user data</li>
            </ul>

            <h2>Support and Communication</h2>
            <div class="contact-section">
                <p>For support or inquiries, you can reach us through:</p>
                <ul>
                    <li>Our official Discord server</li>
                    <li>Email: support@zerobot.com</li>
                    <li>Twitter: @ZeroBot</li>
                </ul>
            </div>

            <h2>Changes to Terms</h2>
            <p>We may update these Terms periodically. We will notify users of any material changes through:</p>
            <ul>
                <li>Discord server announcements</li>
                <li>Direct messages to server administrators</li>
                <li>Updates on our website</li>
            </ul>

            <div class="last-updated">
                <p>Last updated: December 31, 2024</p>
            </div>
        </section>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2024 Zero Bot. All rights reserved.</p>
            <p>Made with ❤️ for the Discord community</p>
        </div>
    </footer>
</body>
</html>`
