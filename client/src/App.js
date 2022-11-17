import styled from "styled-components";
import MediaQuery from 'react-responsive'
import logo from "../src/images/logo.png";
import moblogo from "../src/images/mobile_logo.png";
import S2Img from "../src/images/S2img.png";
import S3Img from "../src/images/S3img.png";
import Icon from "../src/images/icon.png";
import Line1 from "../src/images/line1.png";
import Line2 from "../src/images/line2.png";
import mobile from "../src/images/mobile.png";
import mbS2 from "../src/images/mbimgS2.png";
import mbS3 from "../src/images/mbimgS3.png";
import './App.css';

function App() {
  return (
    <Block>
      <One>
      <MediaQuery minWidth={768}>
          <Video autoPlay muted playsInline loop src="/video.mp4"></Video>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <Topimg></Topimg>
        </MediaQuery>

        <MediaQuery minWidth={768}>
        <Logo></Logo>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <Logoimg></Logoimg>
        </MediaQuery>
        
      </One>
      <Two>
        <TitleText>공연으로 완성되는 특별한 경험</TitleText>
        <Text>아티스트와 관객이 함께한 값진 순간을<br></br>감성을 불어넣은 특별한 공연으로 완성시킵니다.</Text>
        <MediaQuery minWidth={768}>
        <ImgS2></ImgS2>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <MbimgS2></MbimgS2>
        </MediaQuery>
        
      </Two>
      <Three>
        <TitleText>아티스트, 공간과 함께하는 로컬 공연 문화의 중심</TitleText>
        <Text>지역 예술인에게는 공연할 수 있는 공간을,<br></br>공간에게는 장소를 활용한 새로운 경험을 전달합니다.</Text>
        <MediaQuery minWidth={768}>
        <ImgS3></ImgS3>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <MbimgS3></MbimgS3>
        </MediaQuery>
      </Three>
      <Four>
        <Iconimg></Iconimg>
        <LastText>
        <TitleText>지금도 초코뮤직은 수많은 아티스트, 다양한 공간과 함께<Highlight>이전에 없던 예술 문화</Highlight>를 창조하고 있습니다.</TitleText>
        </LastText>
      </Four>
      <Five>
        <LineImg>
        <LineImg1></LineImg1>
        <LineImg2></LineImg2>
        </LineImg>
      </Five>
    </Block>
  );
}
const Block = styled.main`
`
const Logo = styled.img.attrs({
  src:`${logo}`,
})`
  position:absolute;
  top: 3%;
  left : 15%;
  width: 150px;
  z-index: 10;
  object-fit:contain;
`
const Logoimg = styled.img.attrs({
  src:`${moblogo}`,
})`
  position:absolute;
  top: 1%;
  left : 15%;
  width: 40%;
  z-index: 10;
  object-fit:contain;
`
const One = styled.section`
`
const Video = styled.video`
  margin-top:0px;
  width: 100%;
`
const Topimg = styled.img.attrs({
  src:`${mobile}`,
})`
  margin-top : 10%;
  position: relative;
  width: 100%;
  object-fit:contain;
`
const Two = styled.div`
  padding-top : 17%;
`
const TitleText = styled.h2`
  text-align : center;
  font-size : 25px;
  font-weight: bold;
`
const Text = styled.h3`
  margin : 2%;
  text-align : center;
  font-size : 13px;
  font-weight : lighter;
`
const ImgS2 = styled.img.attrs({
  src:`${S2Img}`,
})`
  margin-top : 4%;
  position: relative;
  width: 100%;
  object-fit:contain;
`
const MbimgS2 = styled.img.attrs({
  src:`${mbS2}`,
})`
  margin-top : 4%;
  position: relative;
  width: 100%;
  object-fit:contain;
`
const Three = styled.div`
  padding-top : 17%;
`
const ImgS3 = styled.img.attrs({
  src:`${S3Img}`,
})`
  margin-top : 4%;
  position: relative;
  width: 100%;
  object-fit:contain;
`
const MbimgS3 = styled.img.attrs({
  src:`${mbS3}`,
})`
  margin-top : 4%;
  position: relative;
  width: 100%;
  object-fit:contain;
`
const Four = styled.div`
margin-top : 8%;
text-align : center;
`
const Iconimg = styled.img.attrs({
  src:`${Icon}`,
})`
  margin-top : 4%;
  margin-bottom : 1%;
  position: relative; 
  width: 4%;
  object-fit:contain;
`

const LastText = styled.div`
  margin-left: auto;
  margin-right : auto;
  width : 42%;
  height: 30%;
`
const Highlight = styled.span`
  color: #FFA429;
`
const Five = styled.div`
  margin-top : 6%;
`
const LineImg = styled.div`
  display: table-cell;
  vertical-align: middle;
  background: linear-gradient(#FFDDAD, #FFF5BA);
  width: 100%;
  height: 350px;
`
const LineImg1 = styled.img.attrs({
  src:`${Line1}`,
})` 
  width: 100%;
  object-fit:contain;
`
const LineImg2 = styled.img.attrs({
  src:`${Line2}`,
})`
  width: 100%;
  object-fit:contain;
`
export default App;