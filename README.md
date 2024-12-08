
# 🌌 Hydrion S3LFB0T  

Welcome to **Hydrion S3LFB0T**, an advanced and feature-rich selfbot for Discord that helps you automate tasks and enhance your Discord experience with ease. 🚀  

⚠️ **Disclaimer**:  
**Selfbots are against Discord's Terms of Service.** Use this tool responsibly and at your own risk.  

---

## ✨ Features  

- ⚡ **Automation**: Perform repetitive tasks effortlessly with custom commands.    
- 🛠️ **Customization**: Configure settings to suit your needs and streamline your workflows.  
- 🌐 **Multi-client Support**: Seamlessly switch between multiple Discord accounts.  

---

## 🛑 Requirements  

Before you begin, ensure you have the following installed:  

- **Node.js** (Version 14 or later recommended)  
- **npm** (Node Package Manager, comes with Node.js)  

---

## 🚀 Getting Started  

Follow these steps to set up and run your selfbot.  

### 1️⃣ Clone the Repository  

```bash  
git clone https://github.com/Hydrion-Tools/Hydrion-S3LFB0T.git  
cd Hydrion-S3LFB0T  
```  

### 2️⃣ Install Dependencies  

Install all required npm packages:  

```bash  
npm install  
```  

### 3️⃣ Create the `config.json` File  

In the root directory, create a file named `config.json` and include the following:  

```json  
{  
    "token": "YOUR_DISCORD_TOKEN" 
}  
```  

#### 🔑 How to Get Your Discord Token  

1. Open Discord in your browser or desktop app.  
2. Press `Ctrl + Shift + I` (or `Cmd + Option + I` on Mac) to open the Developer Tools.  
3. Go to the **Application** tab.  
4. Under **Storage**, click on **Local Storage** > `https://discord.com`.  
5. Search for `token` and copy its value.  

---

## 💻 Running the Selfbot  

Once your `config.json` file is ready, start the selfbot using:  

```bash  
node index.js  
```  

---

## ⚙️ Configuration  

You can customize the following options in the `config.json` file:  

- `token`: Your Discord account token.  

---

## 📂 File Structure  

```plaintext  
Hydrion-S3LFB0T/  
├── index.js           # Main entry file  
├── config.json        # Configuration file  
├── package.json       # Node.js dependencies  
└── README.md          # Project documentation  
```  

---

## 📝 Important Notes  

1. **Privacy First**: Never share your `token` or `config.json` with anyone. 🔒  
2. **Terms of Service**: Be aware that using a selfbot violates Discord's terms. Proceed responsibly.  

---

## 🤝 Contributing  

We welcome contributions! Here's how you can help:  

- 🌟 Star this repository to show your support.  
- 🐛 Report issues or bugs in the **Issues** tab.  
- 🔧 Fork the repo, make improvements, and submit a **Pull Request**.  

---

## 📜 License  

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it as needed!  
