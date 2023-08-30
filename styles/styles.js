import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333'
  },
  input: {
    width: '100%',
    padding: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 12
  },
  button: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#007bff'
  },
  logContainer: {
    flex: 1,
    width: '100%',
  },
  logItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tabContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 12
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabIcon: {
    fontSize: 24,
    color: '#007bff'
  },
  tabLabel: {
    fontSize: 12,
    color: '#007bff',
    marginTop: 5
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff'
  },
  inactiveTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'transparent'
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flexEnd: {
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  buttonGap: {
    width: 20
  },

  button: {
    marginVertical: 10
  },

  workoutBtn: {
    marginVertical: 10
  },
  progressContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  progressBar: {
    marginTop: 15,
    height: 10,
    borderRadius: 5
  },
  ProgressContainer: {
    padding: 20
  },
  goalCompletedText: {
    color: 'green',
    fontWeight: 600
  },

  progressBtn: {
    marginVertical: 10
  }
})

export default styles
