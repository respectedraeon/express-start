


const main = async () => {
    await import("dotenv/config")
    await import('./config')
    const db = await import("./helper/mongodb")
    await db.init()
    await import('./server')
}

main()