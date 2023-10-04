import { IoIosArrowDown } from "react-icons/io";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";

/* const menu = [
    {
        label: '',
        icon: '',
        sideIcon: '',
    }
] */

const PrimaryNavbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleAboutUs = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-10 bg-white scroll-smooth"
            : ""
        }`}
      >
        <div
          className={`py-${
            isScrolled ? "5" : "8"
          } nav-2 w-10/12 m-auto flex items-start justify-between`}
        >
          <div className="flex items-baseline gap-10">
            <div className="text-3xl font-semibold text-blue-800">
              Academics
            </div>
            <ul className="nav-menu flex gap-10 text-lg">
              <li className="">Home</li>
              <li className="relative">
                <div
                  onClick={toggleAboutUs}
                  className="flex items-center gap-1"
                >
                  About Us <IoIosArrowDown />
                </div>
                {isOpen && (
                  <ul className="submenu absolute top-10 rounded-bl-lg rounded-br-lg left-0 w-48 bg-white border-t-2 border-emerald-500 overflow-hidden">
                    <li className="p-2 hover:bg-gray-100">
                      <Link href="#">Our Teachers</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link href="#">Our School</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>Admission</li>
              <li>Course</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex gap-1">
            <Link
              href=""
              className="h-10 w-10 flex justify-center items-center bg-emerald-500 text-white"
            >
              <FaFacebookF />
            </Link>
            <Link
              href=""
              className="h-10 w-10 flex justify-center items-center bg-emerald-500 text-white"
            >
              <FaTwitter />
            </Link>
            <Link
              href=""
              className="h-10 w-10 flex justify-center items-center bg-emerald-500 text-white"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        nihil, consequatur eveniet sequi sit officiis, quae quidem minus
        doloremque enim sunt omnis placeat perferendis odio illo commodi
        cupiditate totam fugit tenetur. Fuga architecto recusandae eos ab ut id
        accusantium asperiores quos? Eligendi pariatur placeat beatae quo autem
        eum, nihil expedita facere non veniam porro est, doloribus in maiores
        totam corrupti magnam ut, voluptatem error voluptatum numquam iste
        corporis animi. Aperiam consectetur quisquam veniam vitae praesentium
        labore iste non, maiores illo corporis, voluptates est consequatur,
        quidem architecto alias tenetur delectus odit illum doloremque omnis!
        Sapiente voluptatum illo ea soluta quis quas. Voluptatem eveniet nam
        quaerat consectetur minus obcaecati quia distinctio sapiente blanditiis
        repellendus fuga hic animi, esse quam nostrum molestias illum quod fugit
        nisi veniam ab earum aliquid? Perferendis nostrum odio consequatur
        dolores suscipit cum ratione voluptas aspernatur, minus eos aliquam
        quisquam quis tempora odit nemo ipsam porro! Cumque aliquam officiis,
        est eum vel tempora ad facere perferendis, suscipit, soluta enim
        blanditiis quas quod quaerat rem dolore minus quo. Officiis voluptatibus
        illo consequuntur doloribus eos corporis, debitis ad, cum possimus nisi
        suscipit repellat quo? Modi dolor repellendus, rem quo illum ad. Eius,
        earum. Voluptatibus corporis harum distinctio, dolorem sit laborum
        tempora ab hic ratione ipsa deserunt at eos minima tempore quasi sint
        suscipit nostrum dolore aperiam vero. Dolor reprehenderit eaque corrupti
        aspernatur quo maiores ut, sed magnam vitae, sit amet nostrum numquam.
        Laborum cum minus sapiente, illum cupiditate, nam officia odio nulla
        aspernatur fuga est ab dolor, minima beatae laboriosam quis adipisci
        quam quod! Nulla cum illo et, aut earum ratione numquam odio. Quia
        cumque voluptatem similique saepe ad pariatur quo vel quae explicabo est
        minus sapiente fugit placeat obcaecati nemo quaerat eius, perferendis
        voluptates animi tempora magnam. Ipsa provident enim eaque nam numquam
        explicabo temporibus eos, doloribus eius, molestias, vero dolor libero
        nulla iure consequatur consectetur. Quis laborum quam blanditiis
        explicabo nulla quasi quod, alias accusantium dicta fugit eaque iste,
        quidem voluptatibus provident consequatur omnis soluta labore numquam
        sequi veniam quibusdam? Temporibus omnis architecto dignissimos,
        praesentium culpa reiciendis repudiandae est error necessitatibus itaque
        officia dolorem libero nostrum neque corrupti esse veritatis minus
        saepe, possimus odio. Assumenda, tenetur eos. Quis non sequi voluptate
        architecto, dolorem hic! Facilis aut provident tempore accusamus
        cupiditate, velit, neque maxime modi officia amet dolore facere ratione
        eligendi unde quibusdam. Natus, soluta ipsa id earum consequuntur, hic
        modi reiciendis ex distinctio fugit minima optio quod voluptas cum, non
        quasi debitis necessitatibus! Est, ducimus tenetur? Sapiente qui nobis
        explicabo molestiae, exercitationem harum quos earum minus voluptatibus
        saepe repellat quia veniam vel quaerat. Enim molestias nostrum aliquid
        repellat, similique modi sint quia at eaque magnam voluptatibus totam
        impedit dolorem recusandae perferendis distinctio tempore fuga minima
        temporibus esse, ullam, harum ea reiciendis! Repellendus dicta quibusdam
        fugit corporis atque. Accusantium numquam, id voluptas repudiandae
        sapiente ipsum veniam, odit ea ex provident totam iste voluptatibus quam
        quaerat? Nihil ab aperiam eum culpa animi harum nemo repellat nostrum
        at, pariatur similique nesciunt facilis distinctio optio suscipit
        officia exercitationem quas voluptates vel quidem quos sed. Ad
        voluptatum quaerat odit commodi debitis, dolore, aperiam quasi
        perspiciatis unde nihil aliquam possimus libero quas doloribus nobis
        impedit voluptates nam a sed perferendis ducimus, ipsam minima. Rerum at
        soluta est exercitationem laudantium sequi minima mollitia veniam
        fugiat, placeat vero, vitae sed porro possimus eius quam, totam tempore
        libero in odio deleniti facere repellendus architecto rem. Saepe
        officiis autem iure quibusdam necessitatibus quos corporis totam
        mollitia unde dicta nihil sit, numquam provident perspiciatis.
        Reiciendis, sint. Beatae qui doloribus odio debitis porro, libero
        possimus, magni consectetur earum reprehenderit facere dicta repudiandae
        totam vitae laboriosam sed odit culpa blanditiis vero cum? Ad eius
        dolorem illo dolorum earum aliquam excepturi, beatae magni provident
        sint omnis culpa iusto quaerat aut dolore aperiam quam eaque sunt,
        ratione vel accusantium asperiores. Enim, ullam delectus voluptas minus
        odio voluptatum eius totam iure rerum ipsam fugit architecto laborum
        nostrum consequatur sequi debitis exercitationem porro tempore odit
        possimus, nam impedit perspiciatis! Libero harum necessitatibus quis
        rerum eaque, exercitationem fuga voluptas impedit molestias, ad, quos
        totam aut possimus animi. Maxime ipsum temporibus soluta suscipit
        tenetur quam quasi dolore, error quisquam, totam hic? Natus praesentium
        quam rem debitis architecto repudiandae, ea fugit doloribus eligendi
        necessitatibus esse dolores ex molestiae tempore eos dolorem obcaecati
        soluta. Fugiat dolorum sunt sapiente cupiditate, in molestias, at id nam
        neque eaque possimus hic odio voluptate labore consequuntur animi ipsum
        vero veniam, temporibus beatae fuga distinctio voluptatibus eum. Placeat
        dolorem, laboriosam id nemo quo dolores repellendus voluptate eos sunt!
        Sunt, exercitationem itaque ullam soluta enim facilis quos. Voluptatibus
        inventore libero veniam rerum ullam unde impedit dolorem dolore magni,
        exercitationem pariatur, vitae totam aliquid asperiores, quibusdam
        recusandae quia aspernatur. Corrupti dicta exercitationem aspernatur,
        provident, eligendi voluptates fuga dignissimos architecto molestiae
        error est. Recusandae corporis nisi ullam nihil obcaecati quia nostrum
        nesciunt quam in exercitationem deserunt, veniam nobis ut, asperiores
        tempore voluptates molestias sit pariatur impedit architecto assumenda
        consequatur magni? Suscipit corrupti, repudiandae doloribus, similique
        sunt labore voluptate nobis asperiores perspiciatis quasi a consequatur
        fugit veniam necessitatibus consequuntur? Placeat totam obcaecati
        suscipit. Illo, atque! Consequatur, esse officiis fuga quis voluptatem
        corrupti at molestiae. Consequuntur incidunt qui cumque at repellat,
        deserunt placeat odit porro excepturi maiores sed et error facere nobis
        laborum quis dolorem reprehenderit alias dolore quidem. Eaque ex
        voluptatum maiores pariatur minima perferendis consectetur
        exercitationem doloribus voluptate dolor, impedit fugiat iusto sit earum
        labore voluptatem quibusdam distinctio voluptas quia aut quo laudantium
        eveniet quam. Nisi pariatur, autem, eligendi impedit eos sapiente quam
        alias sint quis earum asperiores animi, mollitia maiores fugit laborum
        in ad! Non libero officiis itaque incidunt voluptates! Quos animi
        possimus mollitia debitis nostrum veniam repellendus, tenetur quod
        consequuntur facere similique iure illum ea deleniti rem ducimus, sed
        maiores corrupti beatae doloremque eligendi dolorem reiciendis voluptate
        vitae! Numquam maiores libero, nihil aliquid sed molestiae et laborum
        debitis, quibusdam accusantium quaerat odio amet? Sit vel recusandae
        possimus fuga, aut ea aperiam, officia molestiae quas mollitia
        accusantium eius minima nesciunt sequi sed soluta et eum dicta
        necessitatibus? Atque aut beatae, consequuntur corrupti repellendus
        voluptate eaque tempora numquam!
      </div>
    </div>
  );
};

export default PrimaryNavbar;

// todo: responsive
