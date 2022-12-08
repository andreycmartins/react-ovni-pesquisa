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
  .navlist {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 0.5vw;
  }
  .nav-link-item {
    padding: 8px 16px;
    background-color: #476930;
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

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    .navlist{
      flex-direction: column;
    }
  }
`
