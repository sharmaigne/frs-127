const TuneIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      viewBox="0 -960 960 960"
      width={24}
      {...props}
    >
      <path d="M440-120v-240h80v80h320v80H520v80h-80zm-320-80v-80h240v80H120zm160-160v-80H120v-80h160v-80h80v240h-80zm160-80v-80h400v80H440zm160-160v-240h80v80h160v80H680v80h-80zm-480-80v-80h400v80H120z" />
    </svg>
  )
}

export default TuneIcon