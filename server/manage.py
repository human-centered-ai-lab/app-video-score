"""

"""

import unittest
import os
from coverage import coverage
from flask_script import Manager

from server.app import db, create_app
from server.app.models.user  import User
from server.app.models.movie import Movie

COV = coverage(
    branch=True,
    include='app/*',
    omit=[
        'tests/*',
        'wsgi.py',
        'settings.py',
        '__init__.py',
        'app/*/__init__.py'
        'app/static/*'
        'app/templates/*'
        'app/import_policy/*'
        'app/models/*'
    ]
)


COV.start()

# create flask application instance

app = create_app ('development')

# test websockets
#socketio, app  = create_app ('development')

manager = Manager(app)

print ("=========== ENVIRONMENT ============")
print ("FLASK_CONFIG = ", os.environ["FLASK_CONFIG"])

@manager.command
def test():
    """Runs the unit tests without test coverage."""
    test_suite = unittest.TestLoader().discover('tests', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(test_suite)
    if result.wasSuccessful():
        return 0
    return 1

@manager.command
def cov():
    """Runs the unit tests with coverage."""
    tests = unittest.TestLoader().discover('tests', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        COV.stop()
        COV.save()
        print('Coverage Summary:')
        COV.report()
        COV.html_report(directory='tests/coverage')
        COV.erase()
        return 0
    return 1

@manager.command
def recreate_db():
    db.drop_all()
    db.create_all()
    db.session.commit()

@manager.command
def seed_db():
    """Seed the user table in test_db database."""
    db.session.add(User(
        username='v',
        email='v@bibbox.com',
        password='vendetta'
    ))
    db.session.add(User(
        username='mue',
        email='heimo.mueller@mac.com',
        password='denkdenk'
    ))
    db.session.add(Movie(
        uuid ="abb68e86-3e73-418a-bb55-af8ebf86fae9",
        name = "Die Katze von London",
        source = "YOUTUBE",
        uri = "https://youtu.be/SUS9rVwBDH0",
        active = True,
        width="640",
        height="360",
        numberOfFrames=120183,
        fps =25
    ))
    db.session.add(Movie(
        uuid="c08d8409-63f8-4082-9fbe-90940c86c2ae",
        name="Der Würger von London",
        source="YOUTUBE",
        uri="https://youtu.be/4iwyvroMhDE",
        active=True,
        width="480",
        height="360",
        numberOfFrames=109035,
        fps =25
    ))
    db.session.add(Movie(
        uuid="cb28a34a-3d20-41f8-940c-67e99e16ee21",
        name="Der Hund von Blackwood Castle (trailer)",
        source="YOUTUBE",
        uri="https://youtu.be/tiNPFqalCh0",
        active=True,
        width="1280",
        height="720",
        numberOfFrames=6317,
        fps =25
    ))

    if (os.environ["FLASK_CONFIG"] == 'development'):
        db.session.add(Movie(
            uuid="85121ddd-b1da-4322-9dc5-6da131a4b3d5",
            name="Testrecording, 21.Dez 2017, Kurt",
            source="FILESYSTEM",
            uri="test.mp4",
            active=True,
            width="1920",
            height="1080",
            numberOfFrames=8695,
            fps =11.0025308422008
        ))
        db.session.add(Movie(
            uuid="2bbcc86a-6714-11ea-bc55-0242ac130003",
            name="V as Vendetta",
            source="FILESYSTEM",
            uri="v.avi",
            active=True,
            width="704 ",
            height="288",
            numberOfFrames=190650,
            fps =25
        ))
        db.session.add(Movie(
            uuid="33db9eb5-6bc6-4f76-929d-f09622b89db7",
            name="TOS.S01E01 Das letzte seiner Art",
            source="FILESYSTEM",
            uri="startrek.mkv",
            active=True,
            width="960",
            height="720",
            numberOfFrames=72602,
            fps = 23.976023976024
        ))    
        db.session.add(Movie(
            uuid="a0a0fd89-d32b-4424-aab7-076173cb1f2b",
            name="Hobbit",
            source="FILESYSTEM",
            uri="hobbit.mkv",
            active=True,
            width="1920",
            height="800",
            numberOfFrames=235985,
            fps =23.976023976024
        ))

    db.session.commit()

if __name__ == '__main__':
    manager.run()
