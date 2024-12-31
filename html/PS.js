export const PS = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zero - Privacy Policy</title>
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
        }

        .info-card {
            background: rgba(114, 137, 218, 0.1);
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
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
        }

        .data-protection {
            background: rgba(88, 101, 242, 0.05);
            border-left: 4px solid var(--accent-color);
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }

        .contact-box {
            background: rgba(114, 137, 218, 0.1);
            border-radius: 12px;
            padding: 20px;
            margin-top: 20px;
            text-align: center;
        }

        footer {
            text-align: center;
            padding: 30px;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            color: var(--text-secondary);
            border-top: 1px solid #333;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Zero - Privacy Policy</h1>
            <p>Last Updated: December 31, 2024</p>
        </div>
    </header>

    <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>Zero ("the Bot") is committed to protecting your privacy. This policy explains our practices regarding data collection and usage.</p>

            <div class="info-card">
                <h2>Key Information Collection</h2>
                <ul>
                    <li>Discord profile data (username, ID, avatar)</li>
                    <li>Server-specific settings and preferences</li>
                    <li>Command usage patterns and interactions</li>
                    <li>Error logs and performance metrics</li>
                    <li>Custom configurations and templates</li>
                </ul>
            </div>

            <h2>Data Processing & Usage</h2>
            <ul>
                <li>Personalization of bot responses and features</li>
                <li>Analytics for performance optimization</li>
                <li>Technical support and troubleshooting</li>
                <li>Feature development based on usage patterns</li>
                <li>Security monitoring and fraud prevention</li>
            </ul>

            <div class="data-protection">
                <h2>Data Protection Measures</h2>
                <ul>
                    <li>End-to-end encryption for sensitive data</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Automated backup systems with encryption</li>
                    <li>Access control and authentication protocols</li>
                </ul>
            </div>

            <h2>Third-Party Integration</h2>
            <p>We integrate with:</p>
            <ul>
                <li>Discord API for core functionality</li>
                <li>Analytics services for performance monitoring</li>
                <li>Cloud storage providers for data backup</li>
            </ul>

            <h2>User Rights & Control</h2>
            <div class="info-card">
                <p>You have the right to:</p>
                <ul>
                    <li>Access your stored data through our dashboard</li>
                    <li>Request data modification or deletion</li>
                    <li>Opt-out of non-essential data collection</li>
                    <li>Export your data in standard formats</li>
                    <li>File complaints with supervisory authorities</li>
                </ul>
            </div>

            <h2>Data Retention</h2>
            <ul>
                <li>Active user data: Retained while service is in use</li>
                <li>Inactive accounts: Data deleted after 180 days</li>
                <li>Logs and analytics: Stored for 90 days</li>
                <li>Backup data: Retained for 30 days</li>
            </ul>

            <div class="contact-box">
                <h2>Contact Information</h2>
                <p>Data Protection Officer: dpo@zerobot.com</p>
                <p>Support: support@zerobot.com</p>
                <p>Discord Server: discord.gg/zerobot</p>
            </div>
        </section>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2024 Zero Bot. All rights reserved.</p>
            <p>Protecting your privacy with transparency and care</p>
        </div>
    </footer>
</body>
</html>`
