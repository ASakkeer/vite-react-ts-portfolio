# EmailJS Setup Instructions

## 📧 Email Integration Setup

Your contact form is now ready to send emails! Follow these steps to complete the setup:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (sakkeer.nsn@gmail.com)
5. Note down the **Service ID** (e.g., `service_xxxxxxx`) // service_b8zlv6l

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down the **Template ID** (e.g., `template_xxxxxxx`) // template_45yogmq

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`) // O2cXyPaOgsWpx1QAW

### 5. Update Configuration
Replace these values in `/src/components/Contact.tsx`:

```typescript
const serviceId = 'YOUR_SERVICE_ID_HERE';     // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID_HERE';   // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY_HERE';     // Replace with your Public Key
```

### 6. Test the Form
1. Start the development server: `npm run dev`
2. Fill out the contact form
3. Click "Send Message"
4. Check your email (sakkeer.nsn@gmail.com) for the message

## ✅ Features Implemented

- ✅ **Email Integration**: Form sends emails to sakkeer.nsn@gmail.com
- ✅ **Form Validation**: Required fields validation
- ✅ **Loading State**: Button shows "Sending..." while processing
- ✅ **Success Message**: Shows confirmation when email is sent
- ✅ **Error Handling**: Shows error message if sending fails
- ✅ **Form Reset**: Clears all fields after successful submission
- ✅ **Auto-hide Messages**: Status messages disappear after 5 seconds

## 🔧 Technical Details

- **Package**: @emailjs/browser
- **Email Provider**: Gmail (configurable)
- **Template Variables**: 
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{subject}}` - Message subject
  - `{{message}}` - Message content
  - `{{to_email}}` - Your email (sakkeer.nsn@gmail.com)

## 🚀 Ready to Use!

Once you complete the EmailJS setup, your contact form will be fully functional and will send emails directly to your inbox!
