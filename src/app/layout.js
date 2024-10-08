import { Aside } from "@/components/Aside";
import { Prompt } from "next/font/google";
import "./globals.scss";
import Form from "@/components/Form";

const prompt = Prompt({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <Aside />
          <div className="app-children-container">
            <Form />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
