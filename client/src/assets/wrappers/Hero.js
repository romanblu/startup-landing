import styled from 'styled-components' 

const Wrapper = styled.div`
    padding: 50px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 17px;
h1 {
    color: var(--grey-100);
    font-size: 80px;
    padding: 10px;
    margin: 0;
}

p{
    color: var(--grey-100);
    font-size: 20px;
    padding: 10px;
}

.hero-btn-container > .btn {
    margin: 20px;
}

img{
    height: 460px;
    transform: matrix(0.8, -0.60, 0.8, 0.6, 0 ,0) ;
    position: absolute;
    transform-origin: top left ;
}
.screens-container{
    position: relative;
}
.screens-banner {
    position: absolute;
    height: 850px;
    width: 1100px;
    margin: 0 auto;
}

.img-screen1 {
    left: 0;
    top: calc(50%);

}

.img-screen2 {
    left: calc(-50% + 20%);
    top: calc(90%);
}
.img-screen3 {
    left: calc(50% - 20%);
    top: calc(90%);
}

.hero-banner-gradient{
    width: 1500px;
    height: 300px;
    margin:auto auto;
}

`

export default Wrapper