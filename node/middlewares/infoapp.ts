export async function infoApp(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { notification },
  } = ctx

  const statusResponse = await notification.getInfo()

  console.info("statusResponse", statusResponse)

  ctx.status = 200
  ctx.body = statusResponse

  await next()
}
