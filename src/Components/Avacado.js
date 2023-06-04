import "../App.css";

function Avacado({minute}) {
  return (
    <svg
      className="minuteHand"
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      height="500"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      style={{
        transform: "rotate(" + minute + "deg)",
      }}
    >
      <defs>
        <clipPath id="aac906c67a">
          <path
            d="M 183 11.675781 L 196 11.675781 L 196 45 L 183 45 Z M 183 11.675781 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="219b144fa2">
          <path
            d="M 77.171875 43 L 297.671875 43 L 297.671875 363.425781 L 77.171875 363.425781 Z M 77.171875 43 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#aac906c67a)">
        <path
          fill="#674d2c"
          d="M 195.246094 44.320312 C 195.277344 44.066406 195.308594 43.808594 195.308594 43.523438 L 195.308594 17.816406 C 195.308594 14.457031 192.5625 11.675781 189.175781 11.675781 C 185.824219 11.675781 183.042969 14.425781 183.042969 17.816406 L 183.042969 43.554688 C 183.042969 43.714844 183.042969 43.875 183.074219 44.035156 C 184.546875 43.9375 186.015625 43.875 187.484375 43.875 C 190.101562 43.875 192.691406 44.035156 195.246094 44.320312 Z M 195.246094 44.320312 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#219b144fa2)">
        <path
          fill="#257c37"
          d="M 253.09375 109.550781 C 253.09375 75.914062 227.796875 48.191406 195.214844 44.351562 C 192.660156 44.066406 190.101562 43.875 187.484375 43.875 C 185.984375 43.875 184.511719 43.9375 183.074219 44.035156 C 148.898438 46.304688 121.875 74.761719 121.875 109.550781 C 120.53125 165.664062 77.28125 206.238281 77.28125 250.078125 C 77.28125 312.84375 124.75 363.425781 187.484375 363.425781 C 250.21875 363.425781 297.527344 312.523438 297.527344 249.757812 C 297.558594 205.921875 253.351562 169.789062 253.09375 109.550781 Z M 253.09375 109.550781 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <path
        fill="#c0cf2c"
        d="M 245.269531 116.617188 C 245.269531 82.882812 219.394531 55.578125 187.515625 55.578125 C 155.605469 55.578125 129.761719 82.914062 129.761719 116.617188 C 128.582031 168.765625 87.566406 206.207031 87.566406 246.910156 C 87.566406 305.265625 132.320312 352.554688 187.515625 352.554688 C 242.714844 352.554688 287.464844 305.265625 287.464844 246.910156 C 287.464844 206.207031 245.460938 172.601562 245.269531 116.617188 Z M 245.269531 116.617188 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#d7e037"
        d="M 240.445312 120.613281 C 240.445312 88.445312 217.128906 62.355469 188.347656 62.355469 C 159.566406 62.355469 136.246094 88.445312 136.246094 120.613281 C 135.160156 170.394531 98.203125 206.078125 98.203125 244.960938 C 98.203125 250.746094 98.652344 256.40625 99.480469 261.90625 C 105.421875 232.394531 131.457031 210.140625 162.695312 210.140625 C 198.3125 210.140625 227.1875 239.046875 227.1875 274.695312 C 227.1875 310.347656 198.3125 339.253906 162.695312 339.253906 C 160.269531 339.253906 157.875 339.09375 155.507812 338.835938 C 165.667969 343.28125 176.75 345.742188 188.347656 345.742188 C 238.144531 345.742188 278.488281 300.597656 278.488281 244.929688 C 278.519531 206.113281 240.636719 174.042969 240.445312 120.613281 Z M 240.445312 120.613281 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#674d2c"
        d="M 253.667969 248.765625 C 253.667969 249.820312 253.644531 250.878906 253.589844 251.933594 C 253.539062 252.988281 253.460938 254.042969 253.359375 255.09375 C 253.253906 256.144531 253.125 257.191406 252.972656 258.238281 C 252.816406 259.28125 252.636719 260.324219 252.429688 261.359375 C 252.222656 262.394531 251.992188 263.425781 251.738281 264.453125 C 251.480469 265.476562 251.199219 266.496094 250.890625 267.503906 C 250.585938 268.515625 250.253906 269.519531 249.898438 270.515625 C 249.542969 271.507812 249.164062 272.492188 248.761719 273.46875 C 248.355469 274.445312 247.929688 275.410156 247.476562 276.367188 C 247.027344 277.320312 246.550781 278.265625 246.054688 279.195312 C 245.558594 280.128906 245.035156 281.046875 244.492188 281.953125 C 243.953125 282.859375 243.386719 283.753906 242.800781 284.632812 C 242.214844 285.507812 241.605469 286.375 240.976562 287.222656 C 240.347656 288.070312 239.699219 288.902344 239.03125 289.71875 C 238.359375 290.535156 237.671875 291.335938 236.960938 292.117188 C 236.253906 292.902344 235.527344 293.667969 234.78125 294.414062 C 234.035156 295.160156 233.269531 295.890625 232.488281 296.597656 C 231.707031 297.308594 230.90625 297.996094 230.089844 298.667969 C 229.273438 299.339844 228.441406 299.988281 227.59375 300.617188 C 226.746094 301.246094 225.882812 301.855469 225.007812 302.441406 C 224.128906 303.027344 223.238281 303.59375 222.332031 304.136719 C 221.425781 304.679688 220.507812 305.199219 219.578125 305.699219 C 218.648438 306.195312 217.707031 306.671875 216.75 307.125 C 215.796875 307.574219 214.832031 308.003906 213.855469 308.40625 C 212.882812 308.8125 211.898438 309.191406 210.902344 309.546875 C 209.910156 309.902344 208.910156 310.234375 207.898438 310.542969 C 206.886719 310.847656 205.871094 311.128906 204.847656 311.386719 C 203.824219 311.644531 202.792969 311.875 201.757812 312.082031 C 200.722656 312.289062 199.683594 312.46875 198.640625 312.625 C 197.597656 312.777344 196.550781 312.90625 195.5 313.011719 C 194.449219 313.113281 193.394531 313.191406 192.339844 313.242188 C 191.289062 313.296875 190.234375 313.320312 189.175781 313.320312 C 188.121094 313.320312 187.066406 313.296875 186.011719 313.242188 C 184.957031 313.191406 183.90625 313.113281 182.855469 313.011719 C 181.804688 312.90625 180.757812 312.777344 179.714844 312.625 C 178.671875 312.46875 177.628906 312.289062 176.59375 312.082031 C 175.558594 311.875 174.53125 311.644531 173.507812 311.386719 C 172.484375 311.128906 171.464844 310.847656 170.457031 310.542969 C 169.445312 310.234375 168.445312 309.902344 167.449219 309.546875 C 166.457031 309.191406 165.472656 308.8125 164.496094 308.40625 C 163.523438 308.003906 162.558594 307.574219 161.601562 307.125 C 160.648438 306.671875 159.707031 306.195312 158.777344 305.699219 C 157.84375 305.199219 156.925781 304.679688 156.019531 304.136719 C 155.117188 303.59375 154.226562 303.027344 153.347656 302.441406 C 152.46875 301.855469 151.605469 301.246094 150.757812 300.617188 C 149.910156 299.988281 149.078125 299.339844 148.261719 298.667969 C 147.449219 297.996094 146.648438 297.308594 145.867188 296.597656 C 145.085938 295.890625 144.320312 295.160156 143.574219 294.414062 C 142.828125 293.667969 142.101562 292.902344 141.390625 292.117188 C 140.683594 291.335938 139.992188 290.535156 139.324219 289.71875 C 138.652344 288.902344 138.003906 288.070312 137.375 287.222656 C 136.746094 286.375 136.140625 285.507812 135.554688 284.632812 C 134.96875 283.753906 134.402344 282.859375 133.859375 281.953125 C 133.316406 281.046875 132.796875 280.128906 132.300781 279.195312 C 131.800781 278.265625 131.328125 277.320312 130.875 276.367188 C 130.425781 275.410156 129.996094 274.445312 129.59375 273.46875 C 129.191406 272.492188 128.808594 271.507812 128.453125 270.515625 C 128.097656 269.519531 127.769531 268.515625 127.460938 267.503906 C 127.15625 266.496094 126.875 265.476562 126.617188 264.453125 C 126.359375 263.425781 126.128906 262.394531 125.925781 261.359375 C 125.71875 260.324219 125.539062 259.28125 125.382812 258.238281 C 125.226562 257.191406 125.097656 256.144531 124.996094 255.09375 C 124.890625 254.042969 124.8125 252.988281 124.761719 251.933594 C 124.710938 250.878906 124.683594 249.820312 124.683594 248.765625 C 124.683594 247.710938 124.710938 246.652344 124.761719 245.597656 C 124.8125 244.542969 124.890625 243.488281 124.996094 242.4375 C 125.097656 241.386719 125.226562 240.339844 125.382812 239.292969 C 125.539062 238.25 125.71875 237.207031 125.925781 236.171875 C 126.128906 235.136719 126.359375 234.105469 126.617188 233.078125 C 126.875 232.054688 127.15625 231.035156 127.460938 230.027344 C 127.769531 229.015625 128.097656 228.011719 128.453125 227.015625 C 128.808594 226.023438 129.191406 225.035156 129.59375 224.0625 C 129.996094 223.085938 130.425781 222.121094 130.875 221.164062 C 131.328125 220.210938 131.800781 219.265625 132.300781 218.335938 C 132.796875 217.402344 133.316406 216.484375 133.859375 215.578125 C 134.402344 214.671875 134.96875 213.777344 135.554688 212.898438 C 136.140625 212.023438 136.746094 211.15625 137.375 210.308594 C 138.003906 209.460938 138.652344 208.628906 139.324219 207.8125 C 139.992188 206.996094 140.683594 206.195312 141.390625 205.414062 C 142.101562 204.628906 142.828125 203.863281 143.574219 203.117188 C 144.320312 202.371094 145.085938 201.640625 145.867188 200.933594 C 146.648438 200.222656 147.449219 199.53125 148.261719 198.863281 C 149.078125 198.191406 149.910156 197.542969 150.757812 196.914062 C 151.605469 196.285156 152.46875 195.675781 153.347656 195.089844 C 154.226562 194.503906 155.117188 193.9375 156.019531 193.394531 C 156.925781 192.851562 157.84375 192.332031 158.777344 191.832031 C 159.707031 191.335938 160.648438 190.859375 161.601562 190.40625 C 162.558594 189.957031 163.523438 189.527344 164.496094 189.125 C 165.472656 188.71875 166.457031 188.339844 167.449219 187.984375 C 168.445312 187.628906 169.445312 187.296875 170.457031 186.988281 C 171.464844 186.683594 172.484375 186.402344 173.507812 186.144531 C 174.53125 185.886719 175.558594 185.65625 176.59375 185.449219 C 177.628906 185.242188 178.671875 185.0625 179.714844 184.90625 C 180.757812 184.753906 181.804688 184.625 182.855469 184.519531 C 183.90625 184.417969 184.957031 184.339844 186.011719 184.285156 C 187.066406 184.234375 188.121094 184.210938 189.175781 184.210938 C 190.234375 184.210938 191.289062 184.234375 192.339844 184.285156 C 193.394531 184.339844 194.449219 184.417969 195.5 184.519531 C 196.550781 184.625 197.597656 184.753906 198.640625 184.90625 C 199.683594 185.0625 200.722656 185.242188 201.757812 185.449219 C 202.792969 185.65625 203.824219 185.886719 204.847656 186.144531 C 205.871094 186.402344 206.886719 186.683594 207.898438 186.988281 C 208.910156 187.296875 209.910156 187.628906 210.902344 187.984375 C 211.898438 188.339844 212.882812 188.71875 213.855469 189.125 C 214.832031 189.527344 215.796875 189.957031 216.75 190.40625 C 217.707031 190.859375 218.648438 191.335938 219.578125 191.832031 C 220.507812 192.328125 221.425781 192.851562 222.332031 193.394531 C 223.238281 193.9375 224.128906 194.503906 225.007812 195.089844 C 225.882812 195.675781 226.746094 196.285156 227.59375 196.914062 C 228.441406 197.542969 229.273438 198.191406 230.089844 198.863281 C 230.90625 199.53125 231.707031 200.222656 232.488281 200.933594 C 233.269531 201.640625 234.035156 202.371094 234.78125 203.117188 C 235.527344 203.863281 236.253906 204.628906 236.960938 205.414062 C 237.671875 206.195312 238.359375 206.996094 239.03125 207.8125 C 239.699219 208.628906 240.347656 209.460938 240.976562 210.308594 C 241.605469 211.15625 242.214844 212.023438 242.800781 212.898438 C 243.386719 213.777344 243.953125 214.671875 244.492188 215.578125 C 245.035156 216.484375 245.558594 217.402344 246.054688 218.332031 C 246.550781 219.265625 247.027344 220.210938 247.476562 221.164062 C 247.929688 222.121094 248.355469 223.085938 248.761719 224.0625 C 249.164062 225.035156 249.542969 226.023438 249.898438 227.015625 C 250.253906 228.011719 250.585938 229.015625 250.890625 230.027344 C 251.199219 231.035156 251.480469 232.054688 251.738281 233.078125 C 251.992188 234.105469 252.222656 235.136719 252.429688 236.171875 C 252.636719 237.207031 252.816406 238.25 252.972656 239.292969 C 253.125 240.339844 253.253906 241.386719 253.359375 242.4375 C 253.460938 243.488281 253.539062 244.542969 253.589844 245.597656 C 253.644531 246.652344 253.667969 247.710938 253.667969 248.765625 Z M 253.667969 248.765625 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#523719"
        d="M 201.089844 284.257812 C 165.476562 284.257812 136.597656 255.351562 136.597656 219.699219 C 136.597656 216.566406 136.824219 213.496094 137.269531 210.492188 C 129.378906 221.203125 124.683594 234.441406 124.683594 248.796875 C 124.683594 284.449219 153.5625 313.355469 189.175781 313.355469 C 221.664062 313.355469 248.527344 289.308594 253 258.007812 C 241.277344 273.929688 222.367188 284.257812 201.089844 284.257812 Z M 201.089844 284.257812 "
        fillOpacity="1"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Avacado;
