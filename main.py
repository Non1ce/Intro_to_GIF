# -*- coding: utf-8 -*-

import ffmpeg


def video_to_gif():
    stream = ffmpeg.input('Vid.v1.mp4')
    stream = ffmpeg.filter(stream, 'fps', fps=45)
    stream = ffmpeg.output(stream, 'Vid.v1.gif')
    ffmpeg.run(stream)


if __name__ == '__main__':
    video_to_gif()
