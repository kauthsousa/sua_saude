"use client";

import Image from "next/image";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Rodape from "../../components/rodape";

export default function Home() {
    return (
        <div className={styles.page}>
            <header><MenuDeslogado /></header>
            <main className={styles.main}>

                {/* BANNER TOPO */}
                <div className={styles.banner_pesquisa}>
                    <Image className={styles.top} src="/images/top.png" alt={""} layout="responsive" width={1500} height={300} />
                    <Image className={styles.icone_central} src="/images/termos.png" alt={""} width={80} height={80} />
                    <h1 className={styles.titulo}>
                        Termos de Uso
                    </h1>

                    {/* PARÁGRAFO DOS TERMOS */}
                    <div className={styles.termos}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet elit lacinia, varius augue a, sagittis ex.
                        Nam scelerisque malesuada pulvinar. Nam in arcu lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Sed ut vulputate dolor. Curabitur eros erat, pellentesque sed diam vitae, porta convallis nulla.
                        Nam ligula eros, porttitor nec faucibus vel, tristique vel lectus. Sed laoreet quam blandit eros auctor dictum.
                        Ut porttitor maximus lorem non finibus. Aenean efficitur venenatis est, vitae scelerisque urna eleifend posuere.
                        Donec non est non nisl cursus finibus. Donec tristique mauris eget convallis pellentesque. Vestibulum non iaculis justo.
                        Etiam dictum lectus magna, eget scelerisque ex consequat a. Praesent massa libero, interdum vitae sollicitudin eu, volutpat ut metus.
                        Nam non venenatis ligula, vitae gravida nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris nisi purus, tempus vitae tempor sed, porta ut justo. Etiam pretium nisi eget vulputate viverra.
                        Nam ut leo nisi. Vivamus ipsum est, faucibus in ipsum eget, congue commodo augue. Maecenas vehicula nibh a ante molestie fringilla.
                        Etiam id eros non sem convallis vulputate. Nam egestas ex sit amet accumsan tempor.
                        Pellentesque laoreet, turpis at pellentesque molestie, massa nibh sodales nisi, in molestie tortor lacus vel dui.
                        Quisque eu mi non purus congue varius. Mauris metus nibh, interdum a convallis vel, feugiat vel sapien. Nunc vitae imperdiet diam.
                        Fusce maximus sapien sit amet lorem viverra, nec varius nibh pretium. Vestibulum dictum lobortis velit, a maximus purus rhoncus quis.
                        Maecenas laoreet, erat at luctus rutrum, purus lacus mollis ex, sit amet condimentum mauris ligula et arcu.
                        Ut et ligula in sapien pharetra vulputate vitae hendrerit eros. Nullam porttitor metus libero, volutpat cursus ex accumsan nec.
                        Donec dignissim in leo ac rhoncus. Maecenas vulputate pharetra ligula, vitae tincidunt ipsum porttitor id. Curabitur ut elit lacus.
                        Praesent et ipsum mauris. Vivamus fringilla mattis odio in auctor. Aliquam luctus ex ac rutrum sodales.
                        Vestibulum eget massa vel lorem tristique finibus. Maecenas viverra facilisis odio, vel tincidunt risus tincidunt sit amet.
                        Vestibulum urna orci, sollicitudin non egestas sed, iaculis fermentum tellus.
                        Fusce libero urna, ullamcorper vitae risus at, lacinia suscipit lorem. Ut eget vehicula nunc, quis varius ex.
                        Nullam tincidunt, tellus sed porttitor molestie, elit nunc iaculis mauris, vulputate blandit est nibh in quam. Phasellus facilisis mollis quam et iaculis.
                        Nulla tempor, tellus at condimentum pulvinar, diam enim mattis felis, eget maximus tellus dui in ipsum.
                        Quisque molestie ullamcorper ex, non interdum nunc molestie luctus. Aliquam erat volutpat.
                        Phasellus augue dui, mattis ut nulla a, fermentum gravida orci. Nunc at ultrices risus. Fusce porttitor nulla tempus lorem blandit maximus.
                        Quisque mattis ultricies imperdiet. Vivamus auctor, ipsum a mattis convallis, neque ipsum pulvinar est, id congue tellus quam non erat.
                        Phasellus sed varius massa.
                    </div>
                </div>
            </main>
            <Rodape></Rodape>
        </div>
    );
}
