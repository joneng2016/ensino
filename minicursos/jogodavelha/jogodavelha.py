import win_line as wl
import pygame as pg
import pandas as pd
import main as main
from data_of_game import DataOfGame 
import math

dtg = DataOfGame()

preto = (0, 0, 0)
branco = (255, 255, 255)
vermelho = (255, 0, 0)
verde = (0, 255, 0)
azul = (0, 0, 255)
cinza = (150, 150, 150)

window = pg.display.set_mode((1000, 600))
window.fill(branco)

pg.font.init()

fonte = pg.font.SysFont("Comic Sams MS", 30)

board_array = [['n','n','n'],
               ['n','n','n'],
               ['n','n','n']]

click_last_status = 0
click_on_of = 0
click_position_x = -1
click_position_y = -1

X_or_O_turn = 'x'

end_game = 0

dtg.board_array = board_array
dtg.end_game = end_game
dtg.X_or_O_turn = X_or_O_turn
dtg.fonte = fonte


while True:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            pg.quit()
            quit()

    dtg = main.main(pg,window,dtg)