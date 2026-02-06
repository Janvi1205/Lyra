import styled from 'styled-components';
import { GiLipstick } from "react-icons/gi";


const Button = () => {
  return (
    <StyledWrapper>
      <button className="cartBtn">
        <svg className="cart"  viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
        ADD TO CART
        <GiLipstick className="product" />
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cartBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(12px, 4vw, 30px);
    position: relative;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    overflow: hidden;

    /* Responsive sizing */
    width: 100%;
    max-width: 260px;
    height: clamp(38px, 6vw, 48px);
    padding: 0 18px;

    background: white;
    color: black;
    border-radius: 12px;
  }

  .cart {
    z-index: 2;
    fill: currentColor;
    width: clamp(16px, 4vw, 20px);
  }

  .cartBtn:active {
    transform: scale(0.96);
  }

  .product {
    position: absolute;
    width: clamp(10px, 3vw, 14px);
    border-radius: 3px;
    left: 20px;
    bottom: 50%;
    transform: translateY(50%);
    opacity: 0;
    z-index: 1;
    fill: currentColor;
  }

  .cartBtn:hover .product {
    animation: slide-in-top 1.2s cubic-bezier(0.25,0.46,0.45,0.94) both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-30px);
      opacity: 1;
    }

    100% {
      transform: translateY(0) rotate(-90deg);
      opacity: 1;
    }
  }

  .cartBtn:hover .cart {
    animation: slide-in-left 1s cubic-bezier(0.25,0.46,0.45,0.94) both;
  }

  @keyframes slide-in-left {
    0% {
      transform: translateX(-10px);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;


export default Button;
