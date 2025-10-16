# 🧮 Scientific Calculator

A modern **Scientific Calculator** web app built using **Vite CLI** and **Qwen Spec Kit**.  
This project combines elegant design, responsive UI, and robust mathematical logic to deliver a fully functional calculator for both basic and advanced computations.

---

## 🚀 Features

### 🔢 Core Capabilities
- Basic arithmetic operations: **Addition (+)**, **Subtraction (−)**, **Multiplication (×)**, **Division (÷)**  
- Scientific operations:  
  - **Trigonometric functions**: `sin`, `cos`, `tan`  
  - **Logarithmic functions**: `log`, `ln`  
  - **Exponential and power**: `x²`, `xʸ`, `e`  
  - **Square root (√)** and **constants (π, e)**  
- Supports **percentage (%)**, **sign toggle (±)**, and **decimal precision** up to 12 digits.  
- **Keyboard input support** – use your keyboard for fast calculations.  
- **Calculation history** – stores your last 10 operations.  

---

## 💡 Tech Stack

- ⚡ **Vite CLI** — for fast development and optimized builds.  
- 🧠 **Qwen Spec Kit** — for UI/UX and intelligent behavior integration.  
- ⚛️ **React + TypeScript** — for modular and type-safe component development.  
- 🎨 **Tailwind CSS** — for a clean, responsive design.  

---

## 🧰 Project Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/scientific-calculator.git
cd scientific-calculator
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create environment file
Create a .env.local file in the project root and add your API key (if applicable):

bash
Copy code
GEMINI_API_KEY=your_api_key_here
4️⃣ Start the development server
bash
Copy code
npm run dev
Your app will be available at:
👉 http://localhost:3000

🎥 Demo
Check out the working demo below:

https://github.com/your-username/scientific-calculator/assets/demo/6110a62a-b180-4387-90c4-9f3e9ee55937.mp4
(If you’re viewing locally, you can also play ./6110a62a-b180-4387-90c4-9f3e9ee55937.mp4)

🧠 How It Works
Calculator buttons are dynamically generated from key constants.

Expressions are parsed and evaluated based on operator precedence.

Supports both light and dark themes.

Built with modular TypeScript definitions for type safety.

Maintains clean state management for accurate and responsive calculations.

🧩 Folder Structure
bash
Copy code
📂 src
 ┣ 📜 App.tsx              # Main app component
 ┣ 📜 constants.ts         # Calculator keys, operators, and configurations
 ┣ 📜 types.ts             # TypeScript interfaces and type definitions
 ┣ 📜 vite.config.ts       # Vite configuration and environment setup
 ┗ 📁 components/
    ┗ 📜 Calculator.tsx    # Core calculator UI and logic
🛠️ Build for Production
bash
Copy code
npm run build
The production build will be available in the dist/ directory.

🪪 License
This project is open-source and available under the MIT License.