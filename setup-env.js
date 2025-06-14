// This is a simple script to help create the .env file
const fs = require('fs');

const envContent = `VITE_EMAILJS_SERVICE_ID=service_a5t7sf7
VITE_EMAILJS_TEMPLATE_ID=template_chz4a2r
VITE_EMAILJS_PUBLIC_KEY=KNxnXJDdRxG-2Oc4q
`;

try {
  fs.writeFileSync('.env', envContent);
  console.log('✅ .env file created successfully!');
} catch (error) {
  console.error('❌ Error creating .env file:', error);
} 