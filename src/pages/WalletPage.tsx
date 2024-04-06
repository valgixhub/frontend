import styled from 'styled-components'
import { PageStyle } from './GlobalPageStyles'
import Button from '@/components/ui/button/Button'
import Icon from '@/components/ui/icon/Icon'
import { device } from '@/vendor/devices'
import Division from '@/components/ui/division/Division'

const WalletAmountBlock = styled.div`
position: relative;
align-items: center;
text-align: center;
`

const WalletAmountText = styled.h1`
user-select: none;
font-size: 64px;
text-decoration: var(--primary-color) wavy underline 3px;
`

const WalletAmountButtons = styled.div`

`

const WalletLogsBlock = styled.div`
position: relative;
user-select: none;
padding: 0px 35px;
display: flex;
flex-direction: column;
align-items: center;
`

const WalletLogsItems = styled.div`
position: relative;
display: flex;
align-items: center;
margin: 10px;
float: left;
margin-bottom: 25px;
`

const WalletLogsItemText = styled.span`
font-size: 24px;
margin-left: 20px;
float: left;
display: flex;
flex-direction: column;
`

const WalletLogsItemTime = styled.small`
font-size: 14px;
color: grey;
`

const WalletLogsItemPriceAdd = styled.span`
font-size: 24px;
margin-left: 20px;
color: #51FF3C;
opacity: 0.5;
user-select: text;
`

const WalletLogsItemPriceSend = styled.span`
font-size: 24px;
margin-left: 20px;
color: #FF3C3C;
opacity: 0.5;
`

const WalletProfileImages = styled.img`
border-radius: 50%;
width: 56px;

@media ${device.mobileL} {
    display: none;
}
`

export default function WalletPage() {
    return (
        <>
            <PageStyle>
                <WalletAmountBlock>
                    <WalletAmountText>254.00$</WalletAmountText>
                    <WalletAmountButtons>
                        <Button style={{margin: '0px 4px'}} styleType='primary'><Icon size={12} name="arrow_downward" /> Add balance</Button>
                        <Button style={{margin: '0px 4px'}} styleType='second'><Icon size={12} name="arrow_upward" /> Send money</Button>
                    </WalletAmountButtons>
                </WalletAmountBlock>

                <Division variant='primary' />

                <WalletLogsBlock>
                    <WalletLogsItems>
                        <WalletProfileImages src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="" />
                        <WalletLogsItemText>
                            Cavid Xakin
                            <WalletLogsItemTime>03.04.2024 at 12:51 GMT+4</WalletLogsItemTime>
                        </WalletLogsItemText>
                        <WalletLogsItemPriceAdd>+200.00$</WalletLogsItemPriceAdd>
                    </WalletLogsItems>

                    <WalletLogsItems>
                        <WalletProfileImages src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="" />
                        <WalletLogsItemText>
                            Cavid Xakin
                            <WalletLogsItemTime>03.04.2024 at 12:51 GMT+4</WalletLogsItemTime>
                        </WalletLogsItemText>
                        <WalletLogsItemPriceAdd>+54.00$</WalletLogsItemPriceAdd>
                    </WalletLogsItems>

                    <WalletLogsItems>
                        <WalletProfileImages src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1712016000&semt=sph" alt="" />
                        <WalletLogsItemText>
                            John Smith
                            <WalletLogsItemTime>23.02.2024 at 12:51 GMT+4</WalletLogsItemTime>
                        </WalletLogsItemText>
                        <WalletLogsItemPriceSend>-12.00$</WalletLogsItemPriceSend>
                    </WalletLogsItems>
                </WalletLogsBlock>
            </PageStyle>
        </>
    )
}