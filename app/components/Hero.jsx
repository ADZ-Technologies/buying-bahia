export default function Hero () {
    return (
        <section className="relative h-screen w-full rounded-b-sm shadow-xl"> 
            <div className="heroText">
                <h1 className="font-script text-8xl font-light text-neutral-50 drop-shadow-lg z-20 tracking-tight">
                    Buying Bahia
                </h1>
                <div className="h-0.5 rounded-full shadow-lg w-full bg-sky-500 -translate-y-1 z-10" />
                <h2 className="font-brand translate-y-2 text-xl ml-auto text-neutral-50 font-semibold drop-shadow-lg">
                    Real Estate In Paradise
                </h2>
                <button
                    className="button mt-16"
                > 
                    The Keys To Your Dreams Await
                </button>
            </div>
            <video
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen w-full object-cover z-10 rounded-b-sm"
                src="/hero-bg-video.mp4"
                autoPlay
                loop
                muted
            />
        </section>
    )
}