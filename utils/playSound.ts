export const playAudio = async (url: string): Promise<void> => {
  const audio = new Audio(url)
  await audio.play()
}
