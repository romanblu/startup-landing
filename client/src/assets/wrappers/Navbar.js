import styled from 'styled-components'

const Wrapper = styled.nav`
.logo {
    display: flex;
    align-items: center;
    width: 100px;
}

.logo-container {
    display: flex;
    align-items: center;
}

.nav-center {
    width: 1000px;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    justify-content: space-between;
    margin: 0 auto;
}
.btn-main {
    background-color: transparent;
    color: var(--white);
    box-shadow: var(--shadow-4);
    margin: 0;
    font-size: 17px;
    border-color: var(--white);
}

.nav-links {
    display: flex; 
    column-gap: 50px;
}
.logo-container > h3 {
    margin-bottom: 0;
}
`
export default Wrapper