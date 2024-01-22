

export const categoryTags = (category) => {
    switch (category.toLowerCase()) {
      case 'laptop':
        return 'bg-blue-600';
      case 'mobiltelefoner':
        return 'bg-orange-600';
        case 'dammsugare':
            return 'bg-purple-600';
          case 'tv':
            return 'bg-green-600';
    
      default:
        return 'bg-gray-200 text-gray-600';
    }
  }
