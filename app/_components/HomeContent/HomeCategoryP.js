import CategoryProduct from "@/app/_components/HomeContent/CategoryProduct";

export default function HomeCategoryP() {
    return <section className="products-category mb-10 md:mb-20">
        <div className="container mb-10 md:mb-20">
            <div
                className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 items-center justify-between text-center gap-4 md:gap-5">
                <CategoryProduct n={1} title={'قهوه های تخصصی'}/>
                <CategoryProduct n={2} title={'قهوه های ترکیبی'}/>
                <CategoryProduct n={3} title={'قهوه های تک خواستگاه'}/>
                <CategoryProduct n={4} title={'قهوه های خانگی'}/>
                <CategoryProduct n={5} title={'قهوه ترک'}/>
            </div>
        </div>
    </section>
}