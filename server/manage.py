"""
Test Suite for Flask. 
To run:
python test_suite test
python test_suite cov
"""

import unittest
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
socketio, app  = create_app ('development')
manager = Manager(app)


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
        height="320"
    ))
    db.session.add(Movie(
        uuid="c08d8409-63f8-4082-9fbe-90940c86c2ae",
        name="Der Würger von London",
        source="YOUTUBE",
        uri="https://youtu.be/4iwyvroMhDE",
        active=True,
         width="640",
        height="320"
    ))
    db.session.add(Movie(
        uuid="cb28a34a-3d20-41f8-940c-67e99e16ee21",
        name="Der Hund von Blackwood Castle (trailer)",
        source="YOUTUBE",
        uri="https://youtu.be/tiNPFqalCh0",
        active=True,
        width="640",
        height="320"
    ))
    db.session.add(Movie(
        uuid="85121ddd-b1da-4322-9dc5-6da131a4b3d5",
        name="Testrecording, 21.Dez 2017, Kurt",
        source="FILESYSTEM",
        uri="test.mp4",
        active=True,
        width="1920",
        height="1080"
    ))
    db.session.add(Movie(
        uuid="a0a0fd89-d32b-4424-aab7-076173cb1f2b",
        name="V as Vendetta",
        source="FILESYSTEM",
        uri="v.avi",
        active=True,
        width="720 ",
        height="288"
    ))
        db.session.add(Movie(
        uuid="33db9eb5-6bc6-4f76-929d-f09622b89db7",
        name="Star.Trek.Raumschiff.Enterprise.TOS.S01E01.Das.letzte.seiner.Art.	",
        source="FILESYSTEM",
        uri="startrek.mkv",
        active=True,
        width="960",
        height="720"
    ))
        db.session.add(Movie(
        uuid="a0a0fd89-d32b-4424-aab7-076173cb1f2b",
        name="Hobbit",
        source="FILESYSTEM",
        uri="hobbit.mkv",
        active=True,
        width="1920",
        height="800"
    ))
    db.session.commit()

if __name__ == '__main__':
    manager.run()
