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
3. Use this template content (the app sends a consolidated message with all fields):

```
Subject: New Contact Form Message - {{subject}}

{{message}}

---
Sent from portfolio contact form.
```

The `{{message}}` contains Name, Email, Phone, Subject, and Message – all formatted in one block.

4. Note down the **Template ID** (e.g., `template_xxxxxxx`) // template_45yogmq

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`) // O2cXyPaOgsWpx1QAW

### 5. Update Configuration
Create a `.env` file in the project root (copy from `.env.example`) and add:

```
VITE_EMAILJS_SERVICE_ID=service_b8zlv6l
VITE_EMAILJS_TEMPLATE_ID=template_45yogmq
VITE_EMAILJS_PUBLIC_KEY=O2cXyPaOgsWpx1QAW
```

Replace with your own values from the EmailJS dashboard.

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
