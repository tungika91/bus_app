from flask import Blueprint
from flask_cors import cross_origin
import requests

bp = Blueprint('api', __name__, url_prefix='/api')

@bp.route('/busArrival/<int:busStopCode>', methods = ['GET'])
@cross_origin()
def bus_arrival_api(busStopCode):
    URL_BUS_ARRIVAL = f'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode={busStopCode}'
    headers = {
        'AccountKey' : 'LLS5w+z5TuiSZjQQz/1FMw==',
        'accept' : 'application/json'
        }
    data = requests.get(URL_BUS_ARRIVAL, headers=headers).json()
    return data
