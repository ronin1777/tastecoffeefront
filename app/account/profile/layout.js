import SideNavigation from "@/app/_components/navbars/ProfileSideNavigation";
import MobileProfileSideN from "@/app/_components/navbars/MobileProfileSideN";


export default function ProfileLayout({ children }) {
    return (
        <section className="my-account">
            <div className="container-2xl">
                <div className="content flex gap-x-7 dark:text-white">
                    {/* Side navigation */}
                    <SideNavigation />
                    <MobileProfileSideN/>
                    {/* Main content */}
                    <div className="w-full lg:w-9/12 min-h-screen lg:p-6 md:pr-0">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}