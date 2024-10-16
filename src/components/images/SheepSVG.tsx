import React from 'react';

interface SheepSVGProps {
  sheepRef?: React.RefObject<SVGSVGElement>;
  isAngry: boolean;
}

const SheepSVG: React.FC<SheepSVGProps> = ({ sheepRef, isAngry }) => {
  return (
    <svg
      ref={sheepRef}
      className="sheep"
      viewBox="0 0 499 482"
      preserveAspectRatio="xMinYMin"
      fill="none"
    >
      <path
        d="M421.46 320.97C435.49 326.95 442.76 341.45 439.46 353.97C435.7 368.21 420.12 372.79 419.46 372.97C423.76 383.24 422.24 394.85 415.46 402.97C407.66 412.3 396.36 412.9 394.46 412.97C398.29 421.93 394.86 431.92 387.46 435.97C381.7 439.13 374.18 438.34 368.46 433.97C368.11 435.45 364.12 451.31 349.46 456.97C336.12 462.12 319.64 456.62 310.46 442.97C308.86 451.87 302.14 458.97 293.46 460.97C284.27 463.08 274.6 459.08 269.46 450.97C264.81 462.49 253.86 470.31 241.46 470.97C229.03 471.63 217.29 464.98 211.46 453.97C210.16 455 202.97 460.48 193.46 458.97C184.49 457.55 177.01 450.47 174.46 440.97C162.43 452.27 145.45 453.18 135.46 444.97C125.8 437.04 126.36 423.65 126.46 421.97C115.92 428.79 102.28 428.36 92.4596 420.97C83.3296 414.1 79.0096 402.35 81.4596 390.97C66.5096 393.43 52.2696 383.45 49.4596 368.97C48.6696 364.88 48.8596 360.78 49.8796 356.92C51.7896 349.61 56.6696 343.19 63.4896 339.43C65.3396 338.39 67.3396 337.57 69.4596 336.97C67.5796 335.91 55.0196 328.59 52.4596 313.97C50.0296 300.12 57.5896 285.43 71.4596 277.97C70.2696 277.58 53.9396 271.9 49.4596 254.97C46.2096 242.69 50.5096 229.41 60.4596 220.97C150.93 214.4 241.41 207.83 331.88 201.26C331.97 201.25 332.07 201.25 332.16 201.24C360.93 199.15 389.69 197.06 418.46 194.97C432.83 208.06 439.22 226.28 434.46 241.97C431.81 250.71 426.32 256.62 422.46 259.97C436.19 264.61 445.19 277.79 444.46 291.97C443.77 305.35 434.54 317.04 421.46 320.97Z"
        fill="#FEFEFF"
      />
      <path
        d="M418.46 194.97C432.83 208.06 439.22 226.28 434.46 241.97C431.81 250.71 426.32 256.62 422.46 259.97C436.19 264.61 445.19 277.79 444.46 291.97C443.77 305.35 434.54 317.04 421.46 320.97C435.49 326.95 442.76 341.45 439.46 353.97C435.7 368.21 420.12 372.79 419.46 372.97C423.76 383.24 422.24 394.85 415.46 402.97C407.66 412.3 396.36 412.9 394.46 412.97C398.29 421.93 394.86 431.92 387.46 435.97C385.11 437.26 382.47 437.89 379.78 437.89C375.87 437.89 371.85 436.56 368.46 433.97C368.11 435.45 364.12 451.31 349.46 456.97C346.14 458.25 342.62 458.87 339.07 458.87C328.36 458.87 317.35 453.21 310.46 442.97C308.86 451.87 302.14 458.97 293.46 460.97C291.82 461.35 290.17 461.53 288.54 461.53C280.97 461.53 273.69 457.63 269.46 450.97C264.81 462.49 253.86 470.31 241.46 470.97C240.89 471 240.33 471.01 239.77 471.01C227.98 471.01 217.03 464.47 211.46 453.97C210.31 454.88 204.61 459.23 196.77 459.23C195.7 459.23 194.6 459.15 193.46 458.97C184.49 457.55 177.01 450.47 174.46 440.97C167.68 447.34 159.34 450.4 151.56 450.4C145.52 450.4 139.82 448.55 135.46 444.97C125.8 437.04 126.36 423.65 126.46 421.97C121.46 425.21 115.75 426.81 110.09 426.81C103.83 426.81 97.6196 424.85 92.4596 420.97C83.3296 414.1 79.0096 402.35 81.4596 390.97C79.9296 391.22 78.4096 391.34 76.9096 391.34C63.7196 391.34 51.9796 381.97 49.4596 368.97C46.7596 355.03 55.4296 340.91 69.4596 336.97C67.5796 335.91 55.0196 328.59 52.4596 313.97C50.0296 300.12 57.5896 285.43 71.4596 277.97C70.2696 277.58 53.9396 271.9 49.4596 254.97C46.2096 242.69 50.5096 229.41 60.4596 220.97C179.79 212.3 299.13 203.64 418.46 194.97ZM422.38 183.66L417.67 184L59.6596 210L56.0796 210.26L53.3396 212.58C40.2096 223.72 34.5096 241.47 38.8196 257.78C41.4096 267.57 46.8596 274.5 52.3696 279.27C43.4796 289.4 39.3196 302.72 41.6196 315.86C43.0396 323.98 46.6496 330.38 50.6396 335.23C40.9996 344.12 36.0496 357.59 38.6596 371.06C41.7296 386.91 54.4196 398.96 70.0296 401.73C71.2296 412.73 76.8296 422.97 85.8496 429.75C92.7496 434.94 101.36 437.8 110.09 437.8C112.62 437.8 115.12 437.57 117.58 437.11C119.56 443.1 123.02 448.97 128.48 453.46C134.71 458.57 142.91 461.39 151.56 461.39C158.07 461.39 164.48 459.87 170.38 457.01C175.68 463.8 183.23 468.48 191.73 469.83C193.39 470.09 195.09 470.23 196.77 470.23C201.06 470.23 204.91 469.37 208.16 468.19C216.19 476.89 227.57 482.01 239.77 482.01C240.53 482.01 241.29 481.99 242.05 481.95C253.5 481.34 264.07 476.15 271.58 467.92C276.64 470.9 282.46 472.52 288.54 472.52C291.02 472.52 293.51 472.24 295.93 471.68C302.77 470.11 308.76 466.46 313.26 461.43C320.82 466.85 329.8 469.87 339.08 469.87C344.06 469.87 348.89 468.98 353.43 467.23C364.22 463.07 370.7 455.2 374.47 448.38C376.22 448.71 378.01 448.88 379.79 448.88C384.37 448.88 388.85 447.75 392.76 445.61C401.5 440.82 406.68 431.49 407.01 421.59C412.48 419.67 418.73 416.22 423.91 410.02C431.09 401.42 434.08 390.22 432.49 379.11C439.69 374.78 447.26 367.54 450.1 356.77C453.32 344.56 449.69 331.66 441.32 322.09C449.6 314.6 454.86 304.05 455.45 292.53C456.17 278.64 449.97 265.51 439.49 256.99C441.88 253.27 443.74 249.29 444.99 245.15C447.99 235.26 447.66 224.46 444.04 213.91C440.6 203.89 434.32 194.52 425.87 186.83L422.38 183.65V183.66Z"
        fill="black"
      />
      <path
        d="M421.46 320.97C435.49 326.95 442.76 341.45 439.46 353.97C435.7 368.21 420.12 372.79 419.46 372.97C423.76 383.24 422.24 394.85 415.46 402.97C407.66 412.3 396.36 412.9 394.46 412.97C398.29 421.93 394.86 431.92 387.46 435.97C381.7 439.13 374.18 438.34 368.46 433.97C368.11 435.45 364.12 451.31 349.46 456.97C336.12 462.12 319.64 456.62 310.46 442.97C308.86 451.87 302.14 458.97 293.46 460.97C284.27 463.08 274.6 459.08 269.46 450.97C264.81 462.49 253.86 470.31 241.46 470.97C229.03 471.63 217.29 464.98 211.46 453.97C210.16 455 202.97 460.48 193.46 458.97C184.49 457.55 177.01 450.47 174.46 440.97C162.43 452.27 145.45 453.18 135.46 444.97C125.8 437.04 126.36 423.65 126.46 421.97C115.92 428.79 102.28 428.36 92.4596 420.97C83.3296 414.1 79.0096 402.35 81.4596 390.97C66.5096 393.43 52.2696 383.45 49.4596 368.97C47.1696 357.14 53.0696 345.17 63.4896 339.43C56.4496 350.85 59.7496 365.91 70.4596 372.97C80.8196 379.8 95.4596 377.4 103.46 366.97C103.03 369.79 102.81 374.61 105.46 378.97C110.06 386.55 121.57 389.89 133.46 385.97C136.9 395.71 145.63 402.43 155.46 402.97C168.07 403.66 175.81 393.82 176.46 392.97C177.29 394.24 182.77 402.38 193.46 403.97C205.37 405.74 213.57 397.85 214.46 396.97C216.67 398.08 228.04 403.49 241.46 398.97C257.36 393.62 262.82 378.8 263.46 376.97C275.82 377.95 286.77 371.61 290.46 361.97C293.6 353.76 290.38 346.01 289.46 343.97C273.5 344.51 253.66 343.62 231.46 338.97C190.5 330.39 160.05 312.89 141.46 299.97C204.94 267.07 268.41 234.16 331.88 201.26C360.74 199.16 389.6 197.07 418.46 194.97C432.83 208.06 439.22 226.28 434.46 241.97C431.81 250.71 426.32 256.62 422.46 259.97C436.19 264.61 445.19 277.79 444.46 291.97C443.77 305.35 434.54 317.04 421.46 320.97Z"
        fill="#FCF6E5"
      />
      <path
        d="M421.46 320.97C435.49 326.95 442.76 341.45 439.46 353.97C435.7 368.21 420.12 372.79 419.46 372.97C423.76 383.24 422.24 394.85 415.46 402.97C407.66 412.3 396.36 412.9 394.46 412.97C398.29 421.93 394.86 431.92 387.46 435.97C381.7 439.13 374.18 438.34 368.46 433.97C368.11 435.45 364.12 451.31 349.46 456.97C336.12 462.12 319.64 456.62 310.46 442.97C308.86 451.87 302.14 458.97 293.46 460.97C284.27 463.08 274.6 459.08 269.46 450.97C264.81 462.49 253.86 470.31 241.46 470.97C229.03 471.63 217.29 464.98 211.46 453.97C210.16 455 202.97 460.48 193.46 458.97C184.49 457.55 177.01 450.47 174.46 440.97C162.43 452.27 145.45 453.18 135.46 444.97C125.8 437.04 126.36 423.65 126.46 421.97C115.92 428.79 102.28 428.36 92.4596 420.97C83.3296 414.1 79.0096 402.35 81.4596 390.97C66.5096 393.43 52.2696 383.45 49.4596 368.97C48.6696 364.88 48.8596 360.78 49.8796 356.92C51.8196 362.28 56.1596 370.57 65.4596 375.97C76.6296 382.45 87.6696 380.54 90.4596 379.97C90.6596 382.16 91.8896 393.31 101.46 400.97C109.97 407.79 121.86 409.27 132.46 404.97C136.67 415.1 145.94 422.09 156.46 422.97C169.57 424.07 178.31 415.18 179.46 413.97C180.68 415.38 188.18 423.7 200.46 423.97C209.89 424.17 216.48 419.5 218.46 417.97C226.49 424.27 237.23 425.83 246.46 421.97C256.72 417.68 263.47 407.39 263.46 395.97C264.03 396.31 268.89 399.15 274.46 396.97C279.34 395.06 281.16 390.71 281.46 389.97C285.87 411.17 307.54 422.06 323.46 415.97C337.36 410.65 346.24 392.62 340.46 374.97C350.4 388.46 368.06 388.77 375.46 380.97C381.84 374.24 381.89 360.09 372.46 349.97C384.66 359.74 401.16 355.71 406.46 345.97C410.89 337.82 407.82 325.06 397.46 317.97C408.29 315.1 416.73 306.67 419.46 295.97C423.38 280.56 413.29 268.9 412.46 267.97C413.78 266.37 415.19 264.38 416.46 261.97C419.54 256.1 420.3 250.55 420.46 246.97C420.17 247.11 417.76 248.22 415.46 246.97C414.34 246.36 413.74 245.46 413.46 244.97C408.08 257.79 398.04 276.85 379.46 293.97C340.79 329.58 292.9 331.19 269.46 331.97C206.74 334.07 159.93 306.95 140.46 293.97C204.36 263.06 268.26 232.15 332.16 201.24C360.93 199.15 389.69 197.06 418.46 194.97C432.83 208.06 439.22 226.28 434.46 241.97C431.81 250.71 426.32 256.62 422.46 259.97C436.19 264.61 445.19 277.79 444.46 291.97C443.77 305.35 434.54 317.04 421.46 320.97Z"
        fill="#DCD3C6"
      />
      <path
        d="M84.4597 208.97C67.3697 219.22 40.9497 220.5 24.4597 204.97C20.3197 201.07 17.3797 196.65 15.3497 192.11C15.1697 191.71 14.9997 191.32 14.8297 190.92C14.7297 190.69 14.6397 190.46 14.5597 190.23C8.50966 174.97 11.8597 158.85 12.4597 155.97C17.5297 131.53 38.1997 111.85 65.4597 103.97C68.2597 106.16 71.0597 108.34 73.8597 110.53C84.7297 119.01 95.5897 127.49 106.46 135.97C116.8 165.16 106.6 195.69 84.4597 208.97Z"
        fill="#533E33"
      />
      <path
        d="M77.4597 119.97C72.0697 120.37 49.9097 122.6 32.7197 140.61C32.2997 141.05 31.8797 141.51 31.4597 141.97C16.9897 158.03 14.3597 177.19 14.8297 190.92C14.5397 190.21 14.2597 189.5 14.0197 188.79C8.71966 173.97 11.8797 158.76 12.4597 155.97C17.5297 131.53 38.1997 111.85 65.4597 103.97C67.7097 105.73 69.9597 107.48 72.2097 109.24C72.7597 109.67 73.3097 110.1 73.8597 110.53C74.1097 111.18 74.3597 111.83 74.5997 112.48C75.5597 114.98 76.5097 117.47 77.4597 119.97Z"
        fill="#E1B79F"
      />
      <path
        d="M72.2097 109.24C64.3297 110.32 43.7797 114.61 28.4597 132.97C11.5897 153.18 12.2897 176.98 14.0197 188.79C8.71966 173.97 11.8797 158.76 12.4597 155.97C17.5297 131.53 38.1997 111.85 65.4597 103.97C67.7097 105.73 69.9597 107.48 72.2097 109.24Z"
        fill="#F8D7C2"
      />
      <path
        d="M80.4597 126.97C75.0397 127.16 53.3097 128.57 35.4597 145.97C19.4597 161.56 15.9297 180.87 15.3497 192.11C15.1697 191.71 14.9997 191.32 14.8297 190.92C14.7297 190.69 14.6397 190.46 14.5597 190.23C14.3897 177.63 16.9997 156.6 33.4597 139.97C48.1797 125.09 65.9697 121.83 72.4597 120.97C75.1297 122.97 77.7897 124.97 80.4597 126.97Z"
        fill="black"
      />
      <path
        d="M106.46 132.97C103.15 126.36 75.5797 130.5 54.4597 142.97C50.9997 145.02 31.2597 157.03 22.4597 179.97C18.9997 188.98 19.8097 192.96 20.4597 194.97C24.2897 206.73 42.9997 212.26 57.4597 209.97C61.0397 209.4 75.1697 206.65 82.4597 194.97C88.6097 185.13 83.4097 179.33 87.4597 164.97C93.2796 144.36 109.1 138.24 106.46 132.97Z"
        fill="#A17769"
      />
      <path
        d="M65.4597 103.97C79.1297 114.64 92.7897 125.3 106.46 135.97C116.8 165.16 106.6 195.69 84.4597 208.97C76.3697 213.82 66.1897 216.66 55.9497 216.66C44.5697 216.66 33.1397 213.14 24.4597 204.97C5.90965 187.5 11.6597 159.83 12.4597 155.97C17.5297 131.53 38.1997 111.85 65.4597 103.97ZM67.7997 91.84L62.3997 93.4C30.7797 102.54 7.51966 125.66 1.68966 153.73C-0.260345 163.12 -0.170345 171.16 0.239655 176.26C1.44966 191.15 7.21966 203.85 16.9197 212.98C26.9797 222.45 40.8397 227.67 55.9597 227.67C68.0297 227.67 80.1597 224.38 90.1197 218.41C103.29 210.51 113.24 197.48 118.15 181.71C123.03 166.02 122.56 148.47 116.84 132.31L115.77 129.29L113.24 127.32L89.5197 108.81L72.2397 95.32L67.8097 91.86L67.7997 91.84Z"
        fill="black"
      />
      <path
        d="M414.05 208.97C431.14 219.22 457.56 220.5 474.05 204.97C478.19 201.07 481.13 196.65 483.16 192.11C483.34 191.71 483.51 191.32 483.68 190.92C483.78 190.69 483.87 190.46 483.95 190.23C490 174.97 486.65 158.85 486.05 155.97C480.98 131.53 460.31 111.85 433.05 103.97C430.25 106.16 427.45 108.34 424.65 110.53C413.78 119.01 402.92 127.49 392.05 135.97C381.71 165.16 391.91 195.69 414.05 208.97Z"
        fill="#533E33"
      />
      <path
        d="M421.05 119.97C426.44 120.37 448.6 122.6 465.79 140.61C466.21 141.05 466.63 141.51 467.05 141.97C481.52 158.03 484.15 177.19 483.68 190.92C483.97 190.21 484.25 189.5 484.49 188.79C489.79 173.97 486.63 158.76 486.05 155.97C480.98 131.53 460.31 111.85 433.05 103.97C430.8 105.73 428.55 107.48 426.3 109.24C425.75 109.67 425.2 110.1 424.65 110.53C424.4 111.18 424.15 111.83 423.91 112.48C422.95 114.98 422 117.47 421.05 119.97Z"
        fill="#E1B79F"
      />
      <path
        d="M426.3 109.24C434.18 110.32 454.73 114.61 470.05 132.97C486.92 153.18 486.22 176.98 484.49 188.79C489.79 173.97 486.63 158.76 486.05 155.97C480.98 131.53 460.31 111.85 433.05 103.97C430.8 105.73 428.55 107.48 426.3 109.24Z"
        fill="#F8D7C2"
      />
      <path
        d="M418.05 126.97C423.47 127.16 445.2 128.57 463.05 145.97C479.05 161.56 482.58 180.87 483.16 192.11C483.34 191.71 483.51 191.32 483.68 190.92C483.78 190.69 483.87 190.46 483.95 190.23C484.12 177.63 481.51 156.6 465.05 139.97C450.33 125.09 432.54 121.83 426.05 120.97C423.38 122.97 420.72 124.97 418.05 126.97Z"
        fill="black"
      />
      <path
        d="M392.05 132.97C395.36 126.36 422.93 130.5 444.05 142.97C447.51 145.02 467.25 157.03 476.05 179.97C479.51 188.98 478.7 192.96 478.05 194.97C474.22 206.73 455.51 212.26 441.05 209.97C437.47 209.4 423.34 206.65 416.05 194.97C409.9 185.13 415.1 179.33 411.05 164.97C405.23 144.36 389.41 138.24 392.05 132.97Z"
        fill="#A17769"
      />
      <path
        d="M433.05 103.97C460.31 111.85 480.98 131.53 486.05 155.97C486.85 159.83 492.6 187.5 474.05 204.97C465.37 213.15 453.93 216.66 442.55 216.66C432.32 216.66 422.14 213.82 414.05 208.97C391.91 195.69 381.71 165.16 392.05 135.97C405.72 125.3 419.38 114.64 433.05 103.97ZM430.71 91.84L426.28 95.3L385.28 127.3L382.75 129.27L381.68 132.29C375.95 148.46 375.49 166 380.37 181.69C385.27 197.46 395.23 210.5 408.4 218.39C418.36 224.36 430.49 227.65 442.56 227.65C457.68 227.65 471.54 222.43 481.6 212.96C491.3 203.83 497.06 191.13 498.28 176.24C498.7 171.15 498.78 163.11 496.83 153.71C491 125.64 467.74 102.52 436.11 93.38L430.71 91.82V91.84Z"
        fill="black"
      />
      <path
        d="M127.46 110.97C123.02 115.83 73.7297 171.45 92.4597 228.97C118.1 307.71 244.53 308.05 252.46 307.97C276.12 307.73 370.69 306.78 397.46 239.97C413.83 199.11 399.26 147.58 362.46 107.97C349.54 96.67 328.19 81.04 298.46 71.97C248.47 56.71 174.18 59.77 127.46 110.97Z"
        fill="#B98B75"
      />
      <path
        d="M127.46 110.97C123.02 115.83 73.7297 171.45 92.4597 228.97C118.1 307.71 244.53 308.05 252.46 307.97C276.12 307.73 370.69 306.78 397.46 239.97C413.83 199.11 399.26 147.58 362.46 107.97C349.54 96.67 328.19 81.04 298.46 71.97C248.47 56.71 174.18 59.77 127.46 110.97Z"
        stroke="black"
        strokeWidth="10"
        strokeMiterlimit="10"
      />
      <path
        d="M124.46 132.97C127.01 134.08 133.86 136.65 142.46 134.97C152.94 132.92 158.89 125.94 160.46 123.97C163.49 124.47 168.05 124.86 173.46 123.97C178.7 123.11 182.78 121.37 185.46 119.97C192.21 122.51 201.38 125.12 212.46 125.97C230.93 127.38 245.79 123.2 254.46 119.97C257.65 122.34 266.95 128.61 280.46 128.97C294.38 129.34 304.22 123.2 307.46 120.97C309.23 121.77 311.98 122.74 315.46 122.97C320.51 123.3 324.45 121.87 326.46 120.97C329.17 123.92 334.4 128.8 342.46 131.97C353.58 136.34 363.44 134.82 367.46 133.97C392.91 165.21 399.03 206.19 382.96 238.47C369.91 264.67 342.47 277.78 334.96 281.47C327.85 284.96 316.48 289.64 290.96 293.47C256.19 298.68 225.67 303.26 189.96 293.47C164.67 286.53 126.44 276.05 108.96 241.47C83.9897 192.07 122.62 135.58 124.46 132.97Z"
        fill="#F9D5BE"
      />
      <path
        d="M155.46 240.97C136.14 241.22 120.82 217.61 121.46 196.97C122.07 177.42 137.16 155.8 155.46 155.97C174.9 156.15 189.96 180.86 188.46 201.97C187.18 220.03 173.4 240.74 155.46 240.97Z"
        fill="black"
      />
      <path
        d="M157.46 165.97C149.23 165.76 141.09 173.59 142.46 181.97C143.65 189.27 151.67 194.64 159.46 192.97C167.18 191.32 172.34 183.25 170.46 175.97C168.92 170.02 163.08 166.12 157.46 165.97Z"
        fill={isAngry ? 'FireBrick' : 'white'}
      />
      <path
        d="M142.46 164.97C139.46 169.17 129.81 183.8 131.46 203.97C132.57 217.54 138.28 227.31 141.46 231.97C139.61 230.34 125.56 217.53 126.46 196.97C127.29 177.9 140.35 166.72 142.46 164.97Z"
        fill="#7D736E"
      />
      <path
        d="M338.54 240.97C357.86 241.22 373.18 217.61 372.54 196.97C371.93 177.42 356.84 155.8 338.54 155.97C319.1 156.15 304.04 180.86 305.54 201.97C306.82 220.03 320.6 240.74 338.54 240.97Z"
        fill="black"
      />
      <path
        d="M336.54 165.97C344.77 165.76 352.91 173.59 351.54 181.97C350.35 189.27 342.33 194.64 334.54 192.97C326.82 191.32 321.66 183.25 323.54 175.97C325.08 170.02 330.92 166.12 336.54 165.97Z"
        fill={isAngry ? 'FireBrick' : 'white'}
      />
      <path
        d="M351.54 164.97C354.54 169.17 364.19 183.8 362.54 203.97C361.43 217.54 355.72 227.31 352.54 231.97C354.39 230.34 368.44 217.53 367.54 196.97C366.71 177.9 353.65 166.72 351.54 164.97Z"
        fill="#7D736E"
      />
      <path
        d="M229.46 218.97C231.22 220.45 236.54 224.51 244.46 224.97C254.23 225.54 260.94 220.23 262.46 218.97"
        stroke="black"
        strokeWidth="6"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M246.46 225.97V240.97C242.43 247.95 235.1 252.25 227.46 251.97C217.93 251.62 209.44 244.22 207.46 233.97"
        stroke="black"
        strokeWidth="6"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M246.46 225.97V240.97C250.49 247.95 257.82 252.25 265.46 251.97C274.99 251.62 283.48 244.22 285.46 233.97"
        stroke="black"
        strokeWidth="6"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />

      <path
        d="M428.08 107.24C427.64 114.72 424.33 122.27 418.96 127.47C411.24 134.95 397.78 139.46 386.96 133.47C379.26 129.2 376.32 121.54 375.46 118.97C374.24 119.54 360.32 125.78 347.46 117.97C339.46 113.11 336.38 105.55 335.46 102.97C332.95 103.97 327.9 105.58 321.46 104.97C314.6 104.32 309.72 101.49 307.46 99.97C305.9 101.24 295.7 109.25 281.46 106.97C267.75 104.77 260.64 94.7 259.46 92.97C254.48 96.28 241.99 103.63 224.46 103.97C204.37 104.36 190.18 95.29 185.46 91.97C184.07 94.15 179.44 100.79 170.46 103.97C163.34 106.49 157.15 105.55 154.46 104.97C153.06 107.26 149.05 113.09 141.46 115.97C127.98 121.08 115.82 112.13 114.96 111.47C113.32 125.52 105.09 136.22 95.9597 137.47C88.8197 138.45 81.6897 133.57 76.8797 126.39C73.0097 120.62 70.6397 113.37 70.9597 106.47C71.0297 104.99 71.2197 103.53 71.5397 102.09C74.2197 89.55 85.7097 78.8 100.96 76.47C100.97 75.44 101.36 61.85 112.96 54.47C122.42 48.45 132.34 51.02 133.96 51.47C134.87 40.36 142.4 30.86 152.96 27.47C163.31 24.15 174.72 27.3 181.96 35.47C183.07 33.48 191.71 18.62 209.96 15.47C225.91 12.72 237.75 20.88 239.96 22.47C255.06 10.21 274.34 6.55 289.96 13.47C300.33 18.06 306.22 26.05 308.96 30.47C319.06 23.35 332.12 22.18 342.96 27.47C357.55 34.6 360.65 49.8 360.96 51.47C361.7 51.15 376.68 44.95 389.96 54.47C390.82 55.08 391.63 55.74 392.41 56.44C399.64 62.89 403.28 72.65 401.96 82.47C403.66 82.38 415.74 81.89 422.96 90.47C426.88 95.13 428.44 101.16 428.08 107.24Z"
        fill="#FEFEFF"
      />
      <path
        d="M273.18 10C278.99 10 284.68 11.13 289.96 13.47C300.33 18.06 306.22 26.05 308.96 30.47C314.86 26.31 321.76 24.18 328.65 24.18C333.56 24.18 338.45 25.26 342.96 27.47C357.55 34.6 360.65 49.8 360.96 51.47C361.38 51.29 366.44 49.19 373.16 49.19C378.23 49.19 384.25 50.38 389.96 54.47C398.8 60.8 403.42 71.6 401.96 82.47C402.21 82.46 402.7 82.43 403.36 82.43C407.15 82.43 416.81 83.17 422.96 90.47C431.7 100.85 428.69 118.04 418.96 127.47C413.73 132.54 405.87 136.24 397.98 136.24C394.22 136.24 390.46 135.4 386.96 133.47C379.26 129.2 376.32 121.54 375.46 118.97C374.7 119.32 369.04 121.87 361.77 121.87C357.34 121.87 352.33 120.93 347.46 117.97C339.46 113.11 336.38 105.55 335.46 102.97C333.33 103.81 329.38 105.1 324.29 105.1C323.38 105.1 322.43 105.06 321.46 104.97C314.6 104.32 309.72 101.49 307.46 99.97C306.09 101.08 298.08 107.38 286.54 107.38C284.91 107.38 283.22 107.26 281.46 106.97C267.75 104.77 260.64 94.7 259.46 92.97C254.48 96.28 241.99 103.63 224.46 103.97C224.04 103.97 223.62 103.98 223.21 103.98C203.78 103.98 190.09 95.22 185.46 91.97C184.07 94.15 179.44 100.79 170.46 103.97C166.87 105.24 163.51 105.63 160.72 105.63C157.93 105.63 155.79 105.25 154.46 104.97C153.06 107.26 149.05 113.09 141.46 115.97C138.49 117.1 135.58 117.54 132.85 117.54C123.17 117.54 115.63 111.98 114.96 111.47C113.32 125.51 105.09 136.22 95.9597 137.47C95.3497 137.55 94.7297 137.59 94.1197 137.59C81.8897 137.59 70.2697 121.21 70.9597 106.47C71.6297 92.12 83.9597 79.07 100.96 76.47C100.97 75.44 101.36 61.85 112.96 54.47C117.85 51.36 122.87 50.54 126.8 50.54C130.47 50.54 133.18 51.25 133.96 51.47C134.87 40.36 142.4 30.86 152.96 27.47C155.69 26.59 158.51 26.17 161.29 26.17C169.05 26.17 176.63 29.46 181.96 35.47C183.07 33.48 191.71 18.62 209.96 15.47C212.23 15.08 214.42 14.91 216.5 14.91C229.08 14.91 238.06 21.11 239.96 22.47C249.96 14.35 261.79 10 273.18 10ZM273.18 0C261.57 0 249.8 3.69 239.41 10.5C233.98 7.75 226.06 4.91 216.5 4.91C213.75 4.91 210.98 5.15 208.26 5.62C195.05 7.9 185.85 15.07 180.15 21.25C174.48 17.96 167.98 16.18 161.29 16.18C157.42 16.18 153.59 16.78 149.9 17.96C138.76 21.53 130.17 29.95 126.23 40.56C119.52 40.66 113.08 42.55 107.59 46.04C97.7497 52.3 93.7297 61.61 92.0897 68.3C74.4497 73.83 61.7697 88.76 60.9697 106.02C60.4497 117.15 65.1097 129.28 73.1297 137.68C79.2397 144.08 86.6997 147.61 94.1197 147.61C95.1897 147.61 96.2597 147.54 97.3097 147.39C107.81 145.95 116.79 137.63 121.57 125.8C124.88 126.82 128.69 127.55 132.84 127.55C136.99 127.55 141.11 126.8 145 125.33C150.3 123.32 155.1 119.95 158.97 115.61C159.55 115.64 160.13 115.65 160.71 115.65C165.2 115.65 169.6 114.9 173.79 113.41C179.67 111.33 184.19 108.15 187.55 104.98C195.94 109.45 208.17 114 223.19 114C223.67 114 224.15 114 224.64 113.99C238.08 113.73 249.15 109.96 257.4 105.76C262.23 110.25 269.67 115.24 279.87 116.87C282.07 117.22 284.32 117.4 286.53 117.4C295.64 117.4 303 114.49 307.98 111.66C311.94 113.42 316.18 114.54 320.5 114.94C321.75 115.06 323.02 115.12 324.28 115.12C326.26 115.12 328.22 114.98 330.15 114.69C332.77 118.75 336.64 123.12 342.25 126.53C348.1 130.08 354.66 131.88 361.75 131.88C364.86 131.88 367.73 131.53 370.23 131.04C372.82 135.03 376.61 139.2 382.09 142.24C386.91 144.91 392.25 146.26 397.95 146.26C407.96 146.26 418.4 141.93 425.89 134.67C432.27 128.49 436.6 119.73 437.78 110.63C439.08 100.55 436.53 91.11 430.58 84.05C425.05 77.48 417.8 74.59 411.87 73.35C410.48 62.62 404.76 52.82 395.76 46.36C389.23 41.68 381.41 39.21 373.14 39.21C371.12 39.21 369.22 39.35 367.48 39.58C364.31 32.62 358.33 23.88 347.33 18.5C341.57 15.69 335.1 14.2 328.63 14.2C322.8 14.2 317.1 15.35 311.79 17.56C307.54 12.71 301.73 7.77 294 4.34C287.52 1.47 280.51 0.02 273.17 0.02L273.18 0Z"
        fill="black"
      />
      <path
        d="M418.96 127.47C411.24 134.95 397.78 139.46 386.96 133.47C379.26 129.2 376.32 121.54 375.46 118.97C374.24 119.54 360.32 125.78 347.46 117.97C339.46 113.11 336.38 105.55 335.46 102.97C332.95 103.97 327.9 105.58 321.46 104.97C314.6 104.32 309.72 101.49 307.46 99.97C305.9 101.24 295.7 109.25 281.46 106.97C267.75 104.77 260.64 94.7 259.46 92.97C254.48 96.28 241.99 103.63 224.46 103.97C204.37 104.36 190.18 95.29 185.46 91.97C184.07 94.15 179.44 100.79 170.46 103.97C163.34 106.49 157.15 105.55 154.46 104.97C153.06 107.26 149.05 113.09 141.46 115.97C127.98 121.08 115.82 112.13 114.96 111.47C113.32 125.52 105.09 136.22 95.9597 137.47C83.0897 139.24 70.2397 121.95 70.9597 106.47C71.0297 104.99 71.2197 103.53 71.5397 102.09C72.9197 104.14 76.0697 108.14 81.4597 109.97C89.4197 112.67 98.9397 109.52 105.46 101.97C109.71 102.6 117.58 103.15 126.46 99.97C141.51 94.58 148.62 82.38 150.46 78.97C152.11 80.48 157.12 84.64 164.46 84.97C172.77 85.35 180.8 80.68 185.46 72.97C187.55 74.88 197.04 83.15 211.46 82.97C227.9 82.77 237.89 71.76 239.46 69.97C241.61 70.92 245.94 72.47 251.46 71.97C259.63 71.24 264.88 66.51 266.46 64.97C268.88 67.58 273.13 71.44 279.46 73.97C291.92 78.96 303.29 75.15 306.46 73.97C307.78 75.52 314.3 82.89 325.46 83.97C335.4 84.93 342.56 80.29 344.46 78.97C345.34 80.47 351.77 91.08 364.46 92.97C376.37 94.74 389.07 88.13 393.46 76.97C396.03 70.45 395.51 63.01 392.41 56.44C399.64 62.89 403.28 72.65 401.96 82.47C403.66 82.38 415.74 81.89 422.96 90.47C431.7 100.85 428.69 118.04 418.96 127.47Z"
        fill="#FCF6E5"
      />
      <path
        d="M428.08 107.24C427.64 114.72 424.33 122.27 418.96 127.47C411.24 134.95 397.78 139.46 386.96 133.47C379.26 129.2 376.32 121.54 375.46 118.97C374.24 119.54 360.32 125.78 347.46 117.97C339.46 113.11 336.38 105.55 335.46 102.97C332.95 103.97 327.9 105.58 321.46 104.97C314.6 104.32 309.72 101.49 307.46 99.97C305.9 101.24 295.7 109.25 281.46 106.97C267.75 104.77 260.64 94.7 259.46 92.97C254.48 96.28 241.99 103.63 224.46 103.97C204.37 104.36 190.18 95.29 185.46 91.97C184.07 94.15 179.44 100.79 170.46 103.97C163.34 106.49 157.15 105.55 154.46 104.97C153.06 107.26 149.05 113.09 141.46 115.97C127.98 121.08 115.82 112.13 114.96 111.47C113.32 125.52 105.09 136.22 95.9597 137.47C88.8197 138.45 81.6897 133.57 76.8797 126.39C80.7597 127.44 90.4897 129.26 100.46 123.97C109.4 119.23 113.28 111.56 114.46 108.97C117.62 109.67 126.53 111.21 136.46 106.97C144.77 103.42 149.5 97.67 151.46 94.97C153.23 96.31 159.2 100.47 167.46 99.97C180.31 99.2 186.95 87.87 187.46 86.97C190.48 89.26 197.86 94.21 208.46 94.97C223.46 96.05 234 87.97 236.46 85.97C238.58 86.32 241.34 86.51 244.46 85.97C253.43 84.43 258.81 78.1 260.46 75.97C262.84 78.87 270.71 87.71 284.46 90.97C298.75 94.36 310.14 89.53 313.46 87.97C315.37 89.51 319.12 92.08 324.46 92.97C334.42 94.63 341.98 89.1 343.46 87.97C343.61 89.41 345.21 102.62 357.46 109.97C369.71 117.32 382.12 112.52 383.46 111.97C386.79 113.84 394.4 117.49 404.46 116.97C415.6 116.39 423.68 111.01 428.08 107.24Z"
        fill="#DCD3C6"
      />
      {!isAngry && (
        <>
          <path
            d="M154.46 249.97C147.32 251.19 138.16 255.26 138.46 258.97C138.78 262.94 149.9 266.34 159.46 264.97C167.73 263.79 176.96 258.73 176.46 254.97C175.92 250.93 164.14 248.32 154.46 249.97Z"
            fill="#F7B7AA"
          />
          <path
            d="M336.47 249.97C343.61 251.19 352.77 255.26 352.47 258.97C352.15 262.94 341.03 266.34 331.47 264.97C323.2 263.79 313.97 258.73 314.47 254.97C315.01 250.93 326.79 248.32 336.47 249.97Z"
            fill="#F7B7AA"
          />
        </>
      )}
      {isAngry && (
        <>
          <path
            d="M305.47 155.97 366.42,135.76"
            style={{
              stroke: '#000000',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeOpacity: 1,
            }}
          />
          <path
            d="M189.47 155.97 123.42,135.76"
            style={{
              stroke: '#000000',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeOpacity: 1,
            }}
          />
        </>
      )}
    </svg>
  );
};

export default SheepSVG;
