import React from "react"

interface MessageProps {
  content: string
  isUser: boolean
}

const Message: React.FC<MessageProps> = ({ content, isUser }) => (
  <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
    <div
      className={`max-w-[70%] rounded-lg px-4 py-2 ${
        isUser
          ? "rounded-br-none bg-blue-500 text-white"
          : "rounded-bl-none bg-gray-300 text-black"
      }`}
      style={{ fontFamily: "system-ui !important" }}
    >
      {content}
    </div>
  </div>
)

interface IMessageWindowProps {
  messages: string[]
}

// eslint-disable-next-line react/no-multi-comp
const IMessageWindow: React.FC<IMessageWindowProps> = ({ messages }) => {
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-lg bg-gray-100 shadow-md">
      <div className="bg-gray-200 px-4 py-2 text-center font-semibold">
        iMessage
      </div>
      <div className="h-96 space-y-2 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <Message key={index} content={message} isUser={index % 2 === 0} />
        ))}
      </div>
    </div>
  )
}

export default IMessageWindow
