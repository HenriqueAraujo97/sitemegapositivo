import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-5.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id = 'contact'>
            <ServicesH1>Benefícios</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src = {Icon1} />
                    <ServicesH2> Preço reduzido</ServicesH2>
                    <ServicesP> We help reduce your fess and increase
                         your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon2} />
                    <ServicesH2> Apoio ao cliente</ServicesH2>
                    <ServicesP> You can access our platform online
                        anywhere in the world.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon3} />
                    <ServicesH2> Garantia</ServicesH2>
                    <ServicesP> Unlock our membership card that
                        asdasdasd asdasd.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>


        </ServicesContainer>
    )
}

export default Services