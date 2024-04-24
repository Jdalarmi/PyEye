import numpy as np

"""Calculate score from impact eye"""

WEIGHTS = {
    'time_exposed': 0.3,
    'rest_time': 0.2,
    'shine_screen': 0.3,
    'distance_screen': 0.2,
    }


def calculate_time_expose(time_exposed):
    return np.clip((time_exposed/ 8) * 100, 0, 100)

def calculate_rest_time(rest_time):
    return np.clip(100 - (rest_time * 20), 0, 100)

def calculate_shine_screen(shine_screen):
    return np.clip(shine_screen, 0, 100)

def calculate_distance(distance_screen):
    return np.clip((1 - distance_screen / 50) * 100, 0, 100)


def impact_on_vision(time_exposed,
                     rest_time, shine_screen,
                     distance_screen):
    points_time_exposed = calculate_time_expose(time_exposed)
    points_rest_time = calculate_rest_time(rest_time)
    points_shine_screen = calculate_shine_screen(shine_screen)
    points_distance = calculate_distance(distance_screen)

    rating_score = (
        WEIGHTS['time_exposed'] * points_time_exposed +
        WEIGHTS['rest_time'] * points_rest_time +
        WEIGHTS['shine_screen'] * points_shine_screen +
        WEIGHTS['distance_screen'] * points_distance
    )
    return rating_score



