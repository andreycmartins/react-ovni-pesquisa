import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-image: url("src/components/Header/space.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 20vh;
  color: white;
  .title {
    margin: 16px;
  }
  .close-button {
    display: none;
  }
  .navlist {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 0.5vw;
  }
  .nav-link-item {
    padding: 8px 16px;
    background-color: #204f00;
    color: white;
    border-radius: 16px;
    display: inline-block;
  }
  .nav-item {
    transition: all ease 0.2s;
    &:hover {
      transform: translateY(-3px);
    }
  }
  .hamburguer {
    display: none;
  }
  @media screen and (max-width: 768px) {
    height: 10vh;
    text-align: center;
    flex-direction: row;
    .navlist {
      display: none;
    }
    .hamburguer {
      display: block;
    }
  }
  /* .navbar-mobile {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(0, 0, 0);
    background: radial-gradient(circle, rgba(0, 0, 0, 0.9) 40%, rgba(12, 43, 0, 1) 100%);
    backdrop-filter: blur(3px);
    .close-button {
      display: block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      transform: scale(2);
    }
    .title {
      display: none;
    }
    .navlist {
      flex-direction: column;
      gap: 16px;
    }
  } */
`
