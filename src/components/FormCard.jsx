export const Card = ({ children }) => {
    return (
      <div className="flex items-center justify-center min-h-screen">
      <div className="border p-4 shadow-xl rounded-lg w-[400px] bg-white">
      
        { children }
      </div>
      </div>
    )
  }