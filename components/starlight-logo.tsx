"use client"
import { useEffect, useRef } from "react"

const starlightStyles = `
@keyframes twinkle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.starlight-logo {
  animation: rotate 60s linear infinite;
}

.twinkle {
  animation: twinkle 2s ease-in-out infinite;
}

.starlight-background {
  mask-image: radial-gradient(50% 50% at 50% 50%, rgb(217, 217, 217) 25%, rgba(217, 217, 217, 0) 100%);
}
`

export function StarlightLogo() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path")
      paths.forEach((path, index) => {
        path.classList.add("twinkle")
        path.style.animationDelay = `${index * 0.2}s`
      })
    }
  }, [])

  return (
    <>
      <style>{starlightStyles}</style>
      <div className="w-full h-full relative">
        <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div className="absolute inset-0 starlight-background">
          <svg
            width="140"
            height="208"
            viewBox="0 0 140 208"
            fill="none"
            className="absolute bottom-0 left-0"
            aria-hidden="true"
          >
            <path
              d="M118.001 2.80602L137.41 23.0245C138.751 24.4212 139.5 26.2823 139.5 28.2185V236C139.5 240.142 136.142 243.5 132 243.5H-15C-19.1421 243.5 -22.5 240.142 -22.5 236V8C-22.5 3.85786 -19.1421 0.5 -15 0.5H112.59C114.632 0.5 116.586 1.33278 118.001 2.80602Z"
              stroke="white"
              strokeOpacity="0.05"
              fill="white"
              fillOpacity="0.03"
            ></path>
          </svg>
          <svg
            width="140"
            height="208"
            viewBox="0 0 140 208"
            fill="none"
            className="absolute left-0 top-0"
            aria-hidden="true"
          >
            <path
              d="M118.001 205.194L137.41 184.976C138.751 183.579 139.5 181.718 139.5 179.782V-28C139.5 -32.1421 136.142 -35.5 132 -35.5H-15C-19.1421 -35.5 -22.5 -32.1421 -22.5 -28V200C-22.5 204.142 -19.1421 207.5 -15 207.5H112.59C114.632 207.5 116.586 206.667 118.001 205.194Z"
              stroke="white"
              strokeOpacity="0.05"
              fill="white"
              fillOpacity="0.03"
            ></path>
          </svg>
          <svg
            width="140"
            height="208"
            viewBox="0 0 140 208"
            fill="none"
            className="absolute right-0 top-0"
            aria-hidden="true"
          >
            <path
              d="M21.9993 205.194L2.5896 184.976C1.24876 183.579 0.5 181.718 0.5 179.782V-28C0.5 -32.1421 3.85786 -35.5 8 -35.5H155C159.142 -35.5 162.5 -32.1421 162.5 -28V200C162.5 204.142 159.142 207.5 155 207.5H27.4097C25.3675 207.5 23.4136 206.667 21.9993 205.194Z"
              stroke="white"
              strokeOpacity="0.05"
              fill="white"
              fillOpacity="0.03"
            ></path>
          </svg>
          <svg
            width="142"
            height="210"
            viewBox="0 0 142 210"
            fill="none"
            className="absolute bottom-0 right-0"
            aria-hidden="true"
          >
            <path d="M4.2289 24.6782L23.6386 4.45975C25.1472 2.88831 27.2314 2 29.4097 2H157C161.418 2 165 5.58173 165 10V238C165 242.418 161.418 246 157 246H10C5.58172 246 2 242.418 2 238V30.2185C2 28.1533 2.79867 26.168 4.2289 24.6782Z"></path>
            <path
              d="M23.9993 4.80602L4.5896 25.0245C3.24876 26.4212 2.5 28.2823 2.5 30.2185V238C2.5 242.142 5.85786 245.5 10 245.5H157C161.142 245.5 164.5 242.142 164.5 238V10C164.5 5.85786 161.142 2.5 157 2.5H29.4097C27.3675 2.5 25.4136 3.33278 23.9993 4.80602Z"
              stroke="white"
              strokeOpacity="0.05"
              fill="white"
              fillOpacity="0.03"
            ></path>
          </svg>
        </div>
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 142.29291 142.29291"
          className="starlight-logo relative z-10 w-full h-full text-white mix-blend-screen"
        >
          <g transform="translate(-33.560792,-68.630921)">
            <g transform="matrix(0.26458333,0,0,0.26458333,33.560792,58.050234)">
              <path
                d="m 338.77,591.66 a 179.95,179.95 0 0 0 258.82,-38.43 l 3.09,-4.73 a 8.57,8.57 0 0 0 -7.17,-13.27 v 0 a 8.58,8.58 0 0 0 -7.22,3.95 l -2.92,4.54 a 162.87,162.87 0 0 1 -233.78,34.68 8.77,8.77 0 0 0 -12.06,1 8.55,8.55 0 0 0 1.24,12.26 z"
                transform="translate(-181.1,-141.11)"
                fill="currentColor"
              />
              <path
                d="M 450,181.1 C 301.49,181.1 181.1,301.49 181.1,450 181.1,598.51 301.49,718.9 450,718.9 598.51,718.9 718.9,598.51 718.9,450 718.9,301.49 598.51,181.1 450,181.1 Z M 218,472.6 h -0.51 a 8.56,8.56 0 0 1 -8.54,-8.05 c -0.29,-4.82 -0.43,-9.72 -0.43,-14.57 a 241.79,241.79 0 0 1 136.18,-217.3 8.56,8.56 0 1 1 7.49,15.39 c -76.9,37.4 -126.58,116.67 -126.58,201.93 0,4.51 0.14,9.06 0.4,13.55 A 8.55,8.55 0 0 1 218,472.6 Z M 644.79,306.54 a 17.08,17.08 0 0 1 1.51,7 c 0,0.44 0,0.88 0,1.31 -0.62,8.22 -7.85,14.38 -16.1,14.38 H 518.4 a 138.11,138.11 0 0 0 -76.35,-17.84 c -71.07,4 -128,62 -130.77,133.16 -3,79 60.37,144.26 138.72,144.26 A 139,139 0 0 0 574.2,512 h 88.91 c 10.84,0 19.64,-8.48 19.64,-18.94 0,-10.46 -8.8,-18.94 -19.64,-18.94 H 543 a 96.2,96.2 0 0 1 -97.51,71.85 c -49.17,-2.27 -89.1,-42.16 -91.4,-91.34 a 96,96 0 0 1 155.26,-80 h 138 a 19,19 0 0 1 32.94,18.17 v 0.05 c -0.18,0.46 -0.39,0.92 -0.61,1.36 -0.06,0.13 -0.12,0.27 -0.19,0.39 -0.2,0.39 -0.42,0.76 -0.64,1.12 -0.09,0.16 -0.18,0.31 -0.28,0.46 -0.26,0.4 -0.54,0.79 -0.83,1.17 l -0.18,0.25 a 18.94,18.94 0 0 1 -30,-0.27 H 530.21 A 95.46,95.46 0 0 1 546,450 h 114.12 a 42.62,42.62 0 1 1 0,85.23 h -23.68 l -11.75,18 v 0 0 C 588.42,614.38 521,655 444.49,652.92 334,650 245.59,557.85 247,447.33 248.46,336.62 339,247 450,247 a 201.9,201.9 0 0 1 118.29,38.13 204.37,204.37 0 0 1 25.2,21.41 h 20.1 a 17.1,17.1 0 0 1 31.2,0 z"
                transform="translate(-181.1,-141.11)"
                fill="currentColor"
              />
              <path
                d="m 511.79,282.22 a 178.82,178.82 0 0 0 -65.69,-12.4 c -99.35,0 -180.18,80.83 -180.18,180.18 a 178.53,178.53 0 0 0 13.93,69.46 8.554246,8.554246 0 1 0 15.78,-6.61 A 161.67,161.67 0 0 1 283,450 c 0,-89.91 73.15,-163.06 163.07,-163.06 a 161.84,161.84 0 0 1 59.43,11.21 8.56,8.56 0 1 0 6.26,-15.93 z"
                transform="translate(-181.1,-141.11)"
                fill="currentColor"
              />
            </g>
          </g>
        </svg>
      </div>
    </>
  )
}

