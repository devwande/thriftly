interface PotProgressBarProps {
  progress: number
  theme: string
}

const PotProgressBar = ({ progress, theme }: PotProgressBarProps) => {
  return (
    <div className="mb-3">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            backgroundColor: theme,
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  )
}

export default PotProgressBar
