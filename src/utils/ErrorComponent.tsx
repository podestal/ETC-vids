interface Props {
    errorMessage: string
}


const ErrorComponent = ({ errorMessage }: Props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-8">
        <h2 className="text-6xl font-bold text-center">Error</h2>
        <p className="text-center">{errorMessage}</p>
    </div>
  )
}

export default ErrorComponent