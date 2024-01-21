
import Cors from 'cors';
import nodeMailer from "nodemailer";

// CORSミドルウェアを初期化します
const cors = Cors({
  // リクエストを受け入れるオリジンを設定します
  origin: '*',
  methods: ['POST'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function contactHandler(req, res) {
  // CORSミドルウェアを実行します
  await runMiddleware(req, res, cors);

  if (req.method === "POST") {
    const { email, name, message } = req.body;
console.log(1)
    const transporter = nodeMailer.createTransport({
      host: "sv14426.xserver.jp",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "kouichi@golem-works.com", // 環境変数からメールアドレスを取得
        pass: "kk620722", // 環境変数からメールアカウントのパスワードを取得
      },
    });
    console.log(2)
    const mailOptions = {
      from: process.env.EMAIL_USER, // 送信者アドレス
      to: "protein.dolles@gmail.com", // あなたがメールを送信したいアドレス
      subject: "Urben Legend Contact Form",
      text: `名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,
    };
console.log(3)
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Send Mail error: ", error);
        res.status(500).json({ message: "メールの送信に失敗しました。" });
      } else {
        res.status(200).json({ message: "メールを送信しました。" });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}