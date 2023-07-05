<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ozkurkculer/PlantTrack">
    <img src="public/PlantTrack-Logo.png" alt="Logo" width="250">
  </a>

  <p align="center">
    Your plant tracking assistant.
    <br />
    <a href="https://github.com/ozkurkculer/PlantTrack"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ozkurkculer/PlantTrack">View Demo</a>
    ·
    <a href="https://github.com/ozkurkculer/PlantTrack/issues">Report Bug</a>
    ·
    <a href="https://github.com/ozkurkculer/PlantTrack/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      About The Project
    </li>
    <li>
   Getting Started
      <ul>
        <li>Installation</li>
      </ul>
    </li>
    <li>Usage</li>
    <li>Contact</li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project | Proje Hakkında

`[EN]` 
Plant Tracking System; It is a system that provides the user with the information of the plants that are growing during the day, and in this direction, the user can determine the water and temperature ratio that the plant needs. Thanks to the sensors in the system, the user can learn the humidity of both the environment and the plant, and also knows the ambient temperature. Through these assistants, users will be able to calculate how much water should be given to the plant and how much it should heat the environment, and will provide the plant with the appropriate conditions.

The Plant Tracking System is a system that was originally born out of a need. It is necessary to learn the condition of seeds and saplings growing in long distances where internet connection is available but difficult to reach. Because growing seedlings and seeds need optimum temperature and liquid. Together with these two important factors, the quality of the soil, the pH value, and the growth and development of the seedling or seed at the highest efficiency are ensured. The Plant Tracking System, on the other hand, measures the temperature and humidity values, which are the most important and constantly variable, and informs the user.

The Plant Tracking System includes soil moisture detection sensor, temperature and humidity sensor, Wi-Fi module and various LEDs and resistors in its basic working principle. The digital value read from the temperature sensor and the values read from the soil moisture detection sensor are transmitted to Arduino Uno via jumper cables and transmitted to the Wi-Fi module from there. Information is transferred to the internet environment via the Wi-Fi module.

`[TR]` 
Bitki Takip Sistemi; özellikle yetişmekte olan bitkilerin gün içerisindeki bilgilerini kullanıcıya sunan ve bu doğrultuda bitkinin ihtiyacı olan su ve sıcaklık oranını kullanıcının belirleyebileceği yardımı kullanıcıya veren sistemdir. Sistemdeki sensörler sayesinde kullanıcı hem ortamın hem de bitkinin nem oranını öğrenebilmekte hem de ortam sıcaklığını bilmektedir. Bu yardımcılar aracılığıyla kullanıcılar bitkiye ne kadar su vermesi gerektiğini ve ortamı ne kadar ısıtması gerektiğini hesaplayabilecek ve buna uygun koşulları bitkiye sağlayacaktır.

Bitki Takip Sistemi aslen bir ihtiyaçtan doğmuş bir sistemdir. İnternet bağlantısının bulunabildiği fakat ulaşması zor uzak mesafelerde yetişmekte olan tohumların ve fidanların hangi durumda olduğunu öğrenmesi gerekmektedir. Çünkü büyümekte olan fidanlar ve tohumlar optimum sıcaklığa ve sıvıya ihtiyaç duymaktadır. Bu iki önemli faktörle birlikte toprağın kalitesi, pH değeri gibi değerlerle fidanın veya tohumun en yüksek verimde büyümesi ve gelişmesi sağlanmaktadır. Bitki Takip Sistemi ise en öncelikli olan ve sürekli değişken olan sıcaklık ve nem değerlerini ölçüp kullanıcıya bilgi vermektedir. 

Bitki Takip Sistemi temel çalışma prensibinde içerisinde toprak nemi algılama sensörü, sıcaklık ve nem sensörü, Wi-Fi modülü ve çeşitli ledler ile dirençler barındırmaktadır. Sıcaklık sensöründen okunan dijital değer ve toprak nemi algılama sensöründen okunan değerler jumper kablolar aracılığıyla Arduino Uno’ya iletilir ve buradan Wi-Fi modülüne iletilir. Wi-Fi modülü üzerinden de internet ortamına bilgiler aktarılır. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Using Technologies | Kullanılan Teknolojiler

* Arduino Uno R3 CH340
* 2.2.	ESP8266 Wi-Fi Serial Transceiver Module
* DHT11 Temperature and Humidity Sensor
* Soil Moisture Detection Sensor
* Node.js
* EJS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation | Kurulum

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ozkurkculer/PlantTrack.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

After completing the installation, you can open the project with the `npm start` command and view the information in the site.

Kurulumu tamamladıktan sonra `npm start` komutu ile projeyi açabilir ve site içerisinde bilgileri görüntüyebilirsiniz.


<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- CONTACT -->
## Contact

Mehmet Emin Özkürkçüler - [@me_ozkurkculer](https://twitter.com/me_ozkurkculer)

Project Link: [https://github.com/ozkurkculer/PlantTrack](https://github.com/ozkurkculer/PlantTrack)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ozkurkculer/PlantTrack.svg?style=for-the-badge
[contributors-url]: https://github.com/ozkurkculer/PlantTrack/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ozkurkculer/PlantTrack.svg?style=for-the-badge
[forks-url]: https://github.com/ozkurkculer/PlantTrack/network/members
[stars-shield]: https://img.shields.io/github/stars/ozkurkculer/PlantTrack.svg?style=for-the-badge
[stars-url]: https://github.com/ozkurkculer/PlantTrack/stargazers
[license-shield]: https://img.shields.io/github/license/ozkurkculer/PlantTrack.svg?style=for-the-badge
[license-url]: https://github.com/ozkurkculer/PlantTrack/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mehmeteminozkurkculer/
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
