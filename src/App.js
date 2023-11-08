import "./styles.css";
import Card from "./card";
import { useState } from "react";

export default function App() {
  const friendsDescription =
    "Tüm zamanların en sevilen sitcom'larından biri Seinfeld ise diğeri hiç kuşkusuz Friends olmuştur. Çocukluk arkadaşı olan Monica ve Rachel, Monica'nın ağabeyi Ross, Ross'un üniversiteden oda arkadaşı Chandler... Chandler'ın ev arkadaşı Joey ve Monica'nın eski arkadaşı Phoebe. Geçmişleri bir şekilde bir yerde kesişen bu 6 arkadaşın yedikleri içtikleri ayrı gitmiyor.Müthiş bir mizah ile dostluk bağlarının içiçe geçtiği dizideki karakterler, 10 sezona yayılan hikaye boyunca izleyiciyle birlikte büyüyüp olgunlaşıyor.";
  const howIMetDescription =
    "2030 yılındayız; Ted Mosby çocuklarına anneleri ile tanışmasının ‘uzuuun’ hikayesini anlatıyor ve bir anda 2005 yılının Amerikası’na geri dönerek, beş sıkı dostun 20’li yaşlardaki eğlenceli yaşamalarına konuk oluyoruz. Ted, 27 yaşında Manhattan'lı bir mimardır. Hukuk fakültesinde okuyan Marshall ise en iyi dostudur ve dokuz yıldır beraber olduğu sevgilisi Lily vardır. Ekibin son üyesi Barney Stenson ise nev-i şahsına münhasır, takım elbise tutkunu bir kadın avcısıdır. Bir gün Marshall Ted’e, Lily’ye evlenme teklif edeceğini söyleyince bekâr kalmak istemeyen Ted’in etekleri tutuşur. Ama evliliğin de herhangi biriyle olmayacağına ve hayatının gerçek aşkını bulacağına inanmaktadır. Tam da bu sırada Robin Scherbatsky ile tanışınca How I Met Your Mother’ın sıkı beşlisi tamamlanır.";
  const theBigBangDescription =
    "Birbirinden zeki ve takıntılı iki ev arkadaşının karşı apartman dairesine, güzel (ama aklı biraz yavaş çalışan) bir genç kız tanışırsa ne olur? The Big Bang Theory MIT doktorası yapan, asosyal iki araştırma görevlisinin, sıradan bir garson olan, sarışın güzel Sheldon ile komşuluk ilişkilerini anlatıyor.";
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [buttonValue1, setButtonValue1] = useState("+");
  const [buttonValue2, setButtonValue2] = useState("+");
  const [buttonValue3, setButtonValue3] = useState("+");

  const clickEvent1 = () => {
    description1 === ""
      ? setDescription1(friendsDescription)
      : setDescription1("");
    buttonValue1 === "+" ? setButtonValue1("-") : setButtonValue1("+");
  };
  const clickEvent2 = () => {
    description2 === ""
      ? setDescription2(howIMetDescription)
      : setDescription2("");
    buttonValue2 === "+" ? setButtonValue2("-") : setButtonValue2("+");
  };
  const clickEvent3 = () => {
    description3 === ""
      ? setDescription3(theBigBangDescription)
      : setDescription3("");
    buttonValue3 === "+" ? setButtonValue3("-") : setButtonValue3("+");
  };

  return (
    <div className="App">
      <h1>En Çok İzlenen Yabancı Komedi Diziler</h1>
      <Card
        name={"Friends"}
        description={description1}
        clickEvent={clickEvent1}
        buttonValue={buttonValue1}
      />
      <Card
        name={"How I Met Your Mother"}
        description={description2}
        clickEvent={clickEvent2}
        buttonValue={buttonValue2}
      />
      <Card
        name={"The Big Bang Theory"}
        description={description3}
        clickEvent={clickEvent3}
        buttonValue={buttonValue3}
      />
    </div>
  );
}
