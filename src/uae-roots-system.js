/**
 * UAE ROOTS FAMILY TREE - COMPLETE COMPREHENSIVE SYSTEM
 * Version: 7.0 - Final Solution with Perfect Sidebar + Auto Tree Rearrangement
 * 
 * This system provides:
 * 1. PERFECT SIDEBAR SIZING - Using your exact working fix permanently
 * 2. AUTO TREE REARRANGEMENT - Dynamic family tree layout
 * 3. FAMILYECHO-STYLE CONNECTIONS - Professional connection lines
 * 4. COMPREHENSIVE INTEGRATION - Everything works together automatically
 */

class UAERootsCompleteSystem {
  constructor() {
    // System state
    this.isInitialized = false;
    this.isRearranging = false;
    
    // Core components
    this.sidebar = null;
    this.treeContainer = null;
    this.connectionsContainer = null;
    
    // Data structures
    this.generations = new Map();
    this.familyUnits = new Map();
    this.connectionLines = [];
    this.people = new Map();
    
    // Observers
    this.sidebarObserver = null;
    this.mutationObserver = null;
    this.resizeObserver = null;
    
    // Configuration - matches CSS variables
    this.config = {
      // Sidebar configuration - YOUR EXACT WORKING FIX
      sidebar: {
        selector: '.uae-roots-sidebar',
        width: 440,
        rightOffset: 24,
        borderRadius: 24,
        maxHeightRatio: 0.85, // 85% of viewport
        paddingBuffer: 20,
        background: '#ffffff',
        borderColor: '#e5e7eb',
        shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        zIndex: 9999,
        fixDelay: 150
      },
      
      // Tree layout configuration
      tree: {
        centerX: 2000,
        centerY: 1500,
        generationHeight: 200,
        familyUnitWidth: 300,
        minPersonSpacing: 100,
        maxSiblingsPerRow: 6,
        rearrangeDuration: 800,
        staggerDelay: 50
      },
      
      // Person box configuration
      person: {
        width: 200,
        height: 100,
        margin: 20
      },
      
      // Connection line configuration
      lines: {
        marriage: { height: 6, color: '#8B4513' },
        parent: { width: 4, color: '#2d3748' },
        sibling: { width: 3, color: '#059669' },
        generation: { width: 4, color: '#4338ca' }
      }
    };
    
    // Auto-initialize
    this.initialize();
  }
  
  /**
   * Initialize the complete system
   */
  async initialize() {
    console.log('🚀 Initializing UAE Roots Complete System...');
    
    try {
      // Wait for DOM to be ready
      await this.waitForDOM();
      
      // Initialize sidebar system with your exact fix
      await this.initializeSidebarSystem();
      
      // Initialize family tree system
      await this.initializeFamilyTreeSystem();
      
      // Set up observers and event listeners
      this.setupObservers();
      this.setupEventListeners();
      
      // Mark as initialized
      this.isInitialized = true;
      
      // Make available globally
      window.uaeRootsSystem = this;
      
      console.log('✅ UAE Roots Complete System initialized successfully!');
      
    } catch (error) {
      console.error('❌ Failed to initialize system:', error);
    }
  }
  
  /**
   * Wait for DOM to be ready
   */
  waitForDOM() {
    return new Promise((resolve) => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resolve);
      } else {
        resolve();
      }
    });
  }
  
  /**
   * Initialize sidebar system using YOUR EXACT WORKING FIX
   */
  async initializeSidebarSystem() {
    console.log('📱 Initializing Perfect Sidebar System...');
    
    // Wait for sidebar to be available
    await this.waitForElement(this.config.sidebar.selector);
    this.sidebar = document.querySelector(this.config.sidebar.selector);
    
    if (this.sidebar) {
      console.log('📍 Sidebar found, applying your exact working fix...');
      
      // Apply your exact working fix immediately
      this.applyPerfectSidebarFix();
      
      // Set up automatic re-application
      this.setupSidebarAutoFix();
      
      console.log('✅ Perfect Sidebar System activated!');
    }
  }
  
  /**
   * Apply your exact working sidebar fix
   */
  applyPerfectSidebarFix() {
    if (!this.sidebar) return;
    
    console.log('🎯 Applying perfect sidebar fit...');
    
    // Step 1: Reset to measure natural content height (your exact logic)
    this.sidebar.style.height = 'auto';
    this.sidebar.style.maxHeight = 'none';
    
    setTimeout(() => {
      // Step 2: Measure the actual content height (your exact logic)
      const contentHeight = this.sidebar.scrollHeight;
      const naturalHeight = this.sidebar.getBoundingClientRect().height;
      const finalHeight = Math.max(contentHeight, naturalHeight) + this.config.sidebar.paddingBuffer;
      const maxHeight = window.innerHeight * this.config.sidebar.maxHeightRatio;
      const adjustedHeight = Math.min(finalHeight, maxHeight);
      
      // Step 3: Apply perfect content-fit styling (your exact CSS text)
      this.sidebar.style.cssText = `
        position: fixed !important;
        top: 50% !important;
        right: ${this.config.sidebar.rightOffset}px !important;
        transform: translateY(-50%) translateX(0) !important;
        width: ${this.config.sidebar.width}px !important;
        height: ${adjustedHeight}px !important;
        max-height: ${adjustedHeight}px !important;
        overflow: hidden !important;
        z-index: ${this.config.sidebar.zIndex} !important;
        background: ${this.config.sidebar.background} !important;
        border: 1px solid ${this.config.sidebar.borderColor} !important;
        border-radius: ${this.config.sidebar.borderRadius}px !important;
        display: flex !important;
        flex-direction: column !important;
        box-shadow: ${this.config.sidebar.shadow} !important;
        backdrop-filter: blur(20px) saturate(180%) !important;
      `;
      
      // Mark as enhanced
      this.sidebar.classList.add('js-enhanced', 'smart-sidebar-fitted');
      
      console.log(`✅ Sidebar fitted perfectly! Height: ${adjustedHeight}px`);
      
    }, this.config.sidebar.fixDelay);
  }
  
  /**
   * Set up automatic sidebar fix re-application
   */
  setupSidebarAutoFix() {
    // Mutation observer to watch for content changes
    this.sidebarObserver = new MutationObserver((mutations) => {
      let shouldReapply = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || 
            mutation.type === 'attributes' ||
            mutation.type === 'characterData') {
          shouldReapply = true;
        }
      });
      
      if (shouldReapply) {
        // Debounce the reapplication
        clearTimeout(this.sidebarFixTimeout);
        this.sidebarFixTimeout = setTimeout(() => {
          console.log('🔄 Content changed, reapplying sidebar fix...');
          this.applyPerfectSidebarFix();
        }, 200);
      }
    });
    
    // Start observing sidebar for changes
    this.sidebarObserver.observe(this.sidebar, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
    
    // Also reapply on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        console.log('📐 Window resized, reapplying sidebar fix...');
        this.applyPerfectSidebarFix();
      }, 300);
    });
  }
  
  /**
   * Initialize family tree system
   */
  async initializeFamilyTreeSystem() {
    console.log('🌳 Initializing Family Tree System...');
    
    // Get or create tree container
    const treeCanvas = document.querySelector('.tree-canvas');
    if (treeCanvas) {
      this.treeContainer = this.getOrCreateElement(treeCanvas, 'div', 'tree-container');
      this.connectionsContainer = this.getOrCreateElement(treeCanvas, 'div', 'connections');
      
      console.log('✅ Family Tree System ready!');
    }
  }
  
  /**
   * Set up observers for automatic system management
   */
  setupObservers() {
    // Resize observer for responsive updates
    this.resizeObserver = new ResizeObserver((entries) => {
      this.handleResize();
    });
    
    if (this.sidebar) {
      this.resizeObserver.observe(this.sidebar);
    }
    
    // Mutation observer for tree changes
    this.mutationObserver = new MutationObserver((mutations) => {
      this.handleTreeMutations(mutations);
    });
    
    if (this.treeContainer) {
      this.mutationObserver.observe(this.treeContainer, {
        childList: true,
        subtree: true
      });
    }
  }
  
  /**
   * Set up event listeners
   */
  setupEventListeners() {
    // Sidebar open/close events
    if (this.sidebar) {
      this.sidebar.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'transform' && this.sidebar.classList.contains('open')) {
          // Sidebar just opened, reapply fix
          setTimeout(() => this.applyPerfectSidebarFix(), 100);
        }
      });
    }
    
    // Tree canvas interactions
    const treeCanvas = document.querySelector('.tree-canvas');
    if (treeCanvas) {
      // Add pan and zoom capabilities
      this.setupTreeInteractions(treeCanvas);
    }
    
    // Add person button (if exists)
    const addPersonBtn = document.querySelector('[data-action="add-person"]');
    if (addPersonBtn) {
      addPersonBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showAddPersonForm();
      });
    }
  }
  
  /**
   * Handle resize events
   */
  handleResize() {
    // Update responsive configuration
    this.updateResponsiveConfig();
    
    // Reapply sidebar fix
    if (this.sidebar) {
      this.applyPerfectSidebarFix();
    }
    
    // Rearrange tree if needed
    if (this.treeContainer && this.people.size > 0) {
      this.rearrangeTree();
    }
  }
  
  /**
   * Handle tree mutations
   */
  handleTreeMutations(mutations) {
    let shouldRearrange = false;
    
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node.classList?.contains('person-box')) {
            shouldRearrange = true;
          }
        });
      }
    });
    
    if (shouldRearrange) {
      console.log('👥 New person detected, rearranging tree...');
      setTimeout(() => this.rearrangeTree(), 100);
    }
  }
  
  /**
   * Add a new person to the family tree
   */
  async addPerson(personData, generationLevel = 0, familyUnitId = 'main', relationships = {}) {
    console.log('➕ Adding person:', personData.name, 'at generation', generationLevel);
    
    try {
      // Create person element
      const personElement = this.createPersonElement(personData);
      
      // Add to generation and family unit
      this.addToGeneration(personElement, generationLevel, familyUnitId);
      
      // Store relationships
      if (relationships) {
        personElement.dataset.relationships = JSON.stringify(relationships);
      }
      
      // Store in people map
      this.people.set(personData.id || this.generateId(), {
        element: personElement,
        data: personData,
        generation: generationLevel,
        familyUnit: familyUnitId,
        relationships: relationships
      });
      
      // Trigger automatic rearrangement
      await this.rearrangeTree();
      
      console.log('✅ Person added successfully!');
      return personElement;
      
    } catch (error) {
      console.error('❌ Error adding person:', error);
      throw error;
    }
  }
  
  /**
   * Create person HTML element
   */
  createPersonElement(personData) {
    const personBox = document.createElement('div');
    personBox.className = `person-box ${personData.gender || 'unknown'} newly-added`;
    personBox.dataset.personId = personData.id || this.generateId();
    personBox.dataset.name = personData.name || 'Unknown';
    personBox.tabIndex = 0; // Make focusable
    
    personBox.innerHTML = `
      <div class="person-content">
        ${personData.avatar ? `<img src="${personData.avatar}" alt="${personData.name}" class="person-avatar">` : ''}
        <div class="person-name ${(personData.name || '').length > 15 ? 'long' : ''}">${personData.name || 'Unknown'}</div>
        <div class="person-details">
          ${personData.birthYear ? `<div class="person-birth-death">b. ${personData.birthYear}</div>` : ''}
          ${personData.deathYear ? `<div class="person-birth-death">d. ${personData.deathYear}</div>` : ''}
          ${personData.title ? `<div class="person-title">${personData.title}</div>` : ''}
        </div>
      </div>
      <div class="person-actions">
        <button class="action-btn partner" data-tooltip="Add Spouse" data-action="add-spouse">♥</button>
        <button class="action-btn parent" data-tooltip="Add Parent" data-action="add-parent">↑</button>
        <button class="action-btn child" data-tooltip="Add Child" data-action="add-child">↓</button>
        <button class="action-btn sibling" data-tooltip="Add Sibling" data-action="add-sibling">⟷</button>
        <button class="action-btn edit" data-tooltip="Edit" data-action="edit">✎</button>
        <button class="action-btn delete" data-tooltip="Delete" data-action="delete">✗</button>
      </div>
    `;
    
    // Add event listeners for actions
    this.setupPersonActions(personBox);
    
    return personBox;
  }
  
  /**
   * Set up person action buttons
   */
  setupPersonActions(personBox) {
    const actionButtons = personBox.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = button.dataset.action;
        const personId = personBox.dataset.personId;
        
        console.log(`🎯 Action: ${action} for person: ${personId}`);
        this.handlePersonAction(action, personId);
      });
    });
  }
  
  /**
   * Handle person action button clicks
   */
  handlePersonAction(action, personId) {
    const person = this.people.get(personId);
    if (!person) return;
    
    switch (action) {
      case 'add-spouse':
        this.showAddRelativeForm('spouse', personId);
        break;
      case 'add-parent':
        this.showAddRelativeForm('parent', personId);
        break;
      case 'add-child':
        this.showAddRelativeForm('child', personId);
        break;
      case 'add-sibling':
        this.showAddRelativeForm('sibling', personId);
        break;
      case 'edit':
        this.showEditPersonForm(personId);
        break;
      case 'delete':
        this.deletePerson(personId);
        break;
    }
  }
  
  /**
   * Show add relative form in sidebar
   */
  showAddRelativeForm(relationship, personId) {
    const person = this.people.get(personId);
    if (!person) return;
    
    console.log(`📝 Showing add ${relationship} form for ${person.data.name}`);
    
    // Open sidebar if not open
    if (this.sidebar && !this.sidebar.classList.contains('open')) {
      this.sidebar.classList.add('open');
      
      // Reapply sidebar fix when opened
      setTimeout(() => this.applyPerfectSidebarFix(), 300);
    }
    
    // Create form content based on relationship type
    this.createRelationshipForm(relationship, personId);
  }
  
  /**
   * Create relationship form in sidebar
   */
  createRelationshipForm(relationship, personId) {
    const formContent = this.sidebar?.querySelector('.form-content');
    if (!formContent) return;
    
    const person = this.people.get(personId);
    const relationshipTitles = {
      spouse: 'إضافة زوج/زوجة',
      parent: 'إضافة والد',
      child: 'إضافة طفل',
      sibling: 'إضافة أخ/أخت'
    };
    
    formContent.innerHTML = `
      <div class="form-section">
        <h3>${relationshipTitles[relationship]} - ${person.data.name}</h3>
        
        <div class="form-group">
          <label for="relative-name" class="label-required">الاسم الكامل</label>
          <input type="text" id="relative-name" required placeholder="أدخل الاسم الكامل">
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="relative-gender">الجنس</label>
            <select id="relative-gender">
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
              <option value="unknown">غير محدد</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="relative-birth-year">سنة الميلاد</label>
            <input type="number" id="relative-birth-year" placeholder="1990" min="1800" max="2030">
          </div>
        </div>
        
        <div class="form-group">
          <label for="relative-title">اللقب أو المهنة</label>
          <input type="text" id="relative-title" placeholder="مثل: دكتور، مهندس، إلخ">
        </div>
        
        <div class="form-group">
          <label for="relative-notes">ملاحظات</label>
          <textarea id="relative-notes" rows="3" placeholder="معلومات إضافية..."></textarea>
        </div>
        
        ${relationship === 'spouse' ? `
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" id="marriage-current" checked>
            <span class="checkbox-text">زواج حالي</span>
          </label>
        </div>
        ` : ''}
      </div>
    `;
    
    // Update form actions
    const formActions = this.sidebar.querySelector('.form-actions');
    if (formActions) {
      formActions.innerHTML = `
        <button type="button" class="btn btn-secondary" data-action="cancel">إلغاء</button>
        <button type="button" class="btn btn-primary" data-action="save">حفظ وإضافة</button>
      `;
      
      // Add event listeners
      formActions.querySelector('[data-action="cancel"]').addEventListener('click', () => {
        this.sidebar.classList.remove('open');
      });
      
      formActions.querySelector('[data-action="save"]').addEventListener('click', () => {
        this.saveRelative(relationship, personId);
      });
    }
    
    // Reapply sidebar fix after content change
    setTimeout(() => this.applyPerfectSidebarFix(), 100);
  }
  
  /**
   * Save new relative
   */
  async saveRelative(relationship, personId) {
    const formData = this.collectFormData();
    if (!formData.name) {
      alert('يرجى إدخال الاسم');
      return;
    }
    
    const person = this.people.get(personId);
    if (!person) return;
    
    // Calculate generation and family unit based on relationship
    let newGeneration, newFamilyUnit;
    
    switch (relationship) {
      case 'spouse':
        newGeneration = person.generation;
        newFamilyUnit = person.familyUnit;
        break;
      case 'parent':
        newGeneration = person.generation - 1;
        newFamilyUnit = `${person.familyUnit}_parents`;
        break;
      case 'child':
        newGeneration = person.generation + 1;
        newFamilyUnit = `${person.familyUnit}_children`;
        break;
      case 'sibling':
        newGeneration = person.generation;
        newFamilyUnit = person.familyUnit;
        break;
    }
    
    // Create new person data
    const newPersonData = {
      id: this.generateId(),
      name: formData.name,
      gender: formData.gender,
      birthYear: formData.birthYear,
      title: formData.title,
      notes: formData.notes
    };
    
    // Create relationships
    const relationships = {};
    if (relationship === 'spouse') {
      relationships.spouse = personId;
      // Update original person's spouse relationship
      const originalPersonData = this.people.get(personId);
      if (originalPersonData) {
        const originalRelationships = JSON.parse(originalPersonData.element.dataset.relationships || '{}');
        originalRelationships.spouse = newPersonData.id;
        originalPersonData.element.dataset.relationships = JSON.stringify(originalRelationships);
      }
    } else if (relationship === 'parent') {
      relationships.children = [personId];
    } else if (relationship === 'child') {
      relationships.parents = [personId];
    }
    
    // Add the new person
    await this.addPerson(newPersonData, newGeneration, newFamilyUnit, relationships);
    
    // Close sidebar
    this.sidebar.classList.remove('open');
    
    console.log(`✅ Added ${relationship}: ${newPersonData.name}`);
  }
  
  /**
   * Collect form data from sidebar
   */
  collectFormData() {
    const formContent = this.sidebar?.querySelector('.form-content');
    if (!formContent) return {};
    
    return {
      name: formContent.querySelector('#relative-name')?.value || '',
      gender: formContent.querySelector('#relative-gender')?.value || 'unknown',
      birthYear: formContent.querySelector('#relative-birth-year')?.value || '',
      title: formContent.querySelector('#relative-title')?.value || '',
      notes: formContent.querySelector('#relative-notes')?.value || '',
      marriageCurrent: formContent.querySelector('#marriage-current')?.checked || false
    };
  }
  
  /**
   * Add person to generation container
   */
  addToGeneration(personElement, generationLevel, familyUnitId) {
    const generationContainer = this.getOrCreateGenerationContainer(generationLevel);
    const familyUnit = this.getOrCreateFamilyUnit(familyUnitId, generationContainer);
    
    familyUnit.appendChild(personElement);
    
    // Update data structures
    if (!this.generations.has(generationLevel)) {
      this.generations.set(generationLevel, []);
    }
    this.generations.get(generationLevel).push(personElement);
    
    if (!this.familyUnits.has(familyUnitId)) {
      this.familyUnits.set(familyUnitId, []);
    }
    this.familyUnits.get(familyUnitId).push(personElement);
  }
  
  /**
   * Get or create generation container
   */
  getOrCreateGenerationContainer(generationLevel) {
    const generationClass = `generation-${generationLevel >= 0 ? 'plus-' + generationLevel : 'minus-' + Math.abs(generationLevel)}`;
    
    let generationContainer = this.treeContainer.querySelector(`.generation-container.${generationClass}`);
    
    if (!generationContainer) {
      generationContainer = document.createElement('div');
      generationContainer.className = `generation-container ${generationClass}`;
      this.treeContainer.appendChild(generationContainer);
    }
    
    return generationContainer;
  }
  
  /**
   * Get or create family unit
   */
  getOrCreateFamilyUnit(familyUnitId, generationContainer) {
    let familyUnit = generationContainer.querySelector(`.family-unit[data-family="${familyUnitId}"]`);
    
    if (!familyUnit) {
      familyUnit = document.createElement('div');
      familyUnit.className = 'family-unit';
      familyUnit.dataset.family = familyUnitId;
      generationContainer.appendChild(familyUnit);
    }
    
    return familyUnit;
  }
  
  /**
   * Main tree rearrangement function
   */
  async rearrangeTree() {
    if (this.isRearranging) return;
    if (this.people.size === 0) return;
    
    this.isRearranging = true;
    
    console.log('🔄 Starting automatic tree rearrangement...');
    
    try {
      // Mark tree as rearranging
      this.treeContainer.classList.add('rearranging', 'tree-rearranging');
      
      // Calculate optimal positions
      await this.calculateOptimalPositions();
      
      // Apply new positions with staggered animations
      await this.applyNewPositions();
      
      // Update connection lines
      await this.updateConnectionLines();
      
      // Center the tree view
      this.centerTreeView();
      
      console.log('✅ Tree rearrangement completed!');
      
    } catch (error) {
      console.error('❌ Error during tree rearrangement:', error);
    } finally {
      // Remove rearranging state after animation
      setTimeout(() => {
        this.treeContainer.classList.remove('rearranging', 'tree-rearranging');
        this.isRearranging = false;
        
        // Remove newly-added class
        this.treeContainer.querySelectorAll('.newly-added').forEach(el => {
          el.classList.remove('newly-added');
        });
      }, this.config.tree.rearrangeDuration);
    }
  }
  
  /**
   * Calculate optimal positions for all people
   */
  async calculateOptimalPositions() {
    const generations = Array.from(this.generations.keys()).sort((a, b) => a - b);
    
    generations.forEach(generationLevel => {
      const generationContainer = this.getOrCreateGenerationContainer(generationLevel);
      const familyUnits = generationContainer.querySelectorAll('.family-unit');
      
      this.positionFamilyUnitsInGeneration(familyUnits, generationLevel);
      
      familyUnits.forEach(familyUnit => {
        this.positionIndividualsInFamilyUnit(familyUnit);
      });
    });
  }
  
  /**
   * Position family units within a generation
   */
  positionFamilyUnitsInGeneration(familyUnits, generationLevel) {
    const totalUnits = familyUnits.length;
    if (totalUnits === 0) return;
    
    const totalWidth = totalUnits * this.config.tree.familyUnitWidth;
    const startX = this.config.tree.centerX - (totalWidth / 2);
    
    familyUnits.forEach((unit, index) => {
      const x = startX + (index * this.config.tree.familyUnitWidth);
      unit.style.left = `${x}px`;
    });
  }
  
  /**
   * Position individuals within a family unit
   */
  positionIndividualsInFamilyUnit(familyUnit) {
    const people = Array.from(familyUnit.querySelectorAll('.person-box'));
    const totalPeople = people.length;
    
    if (totalPeople === 0) return;
    
    if (totalPeople === 2 && this.isMarriedCouple(people[0], people[1])) {
      this.positionMarriedCouple(people[0], people[1]);
    } else if (totalPeople > this.config.tree.maxSiblingsPerRow) {
      this.positionSiblingsWithWrapping(people, familyUnit);
    } else {
      this.positionSiblingsInRow(people);
    }
  }
  
  /**
   * Position married couple
   */
  positionMarriedCouple(spouse1, spouse2) {
    const spacing = this.config.tree.minPersonSpacing;
    spouse1.style.transform = `translateX(-${spacing/2}px)`;
    spouse2.style.transform = `translateX(${spacing/2}px)`;
    
    spouse1.classList.add('married');
    spouse2.classList.add('married');
  }
  
  /**
   * Position siblings in a row
   */
  positionSiblingsInRow(siblings) {
    const totalWidth = (siblings.length - 1) * this.config.tree.minPersonSpacing;
    const startX = -totalWidth / 2;
    
    siblings.forEach((person, index) => {
      const x = startX + (index * this.config.tree.minPersonSpacing);
      person.style.transform = `translateX(${x}px)`;
      person.classList.add('sibling');
    });
  }
  
  /**
   * Position siblings with wrapping
   */
  positionSiblingsWithWrapping(siblings, familyUnit) {
    familyUnit.classList.add('overflow');
    
    const rowSize = this.config.tree.maxSiblingsPerRow;
    const rows = Math.ceil(siblings.length / rowSize);
    
    siblings.forEach((person, index) => {
      const row = Math.floor(index / rowSize);
      const col = index % rowSize;
      const siblingsInRow = Math.min(rowSize, siblings.length - row * rowSize);
      
      const rowWidth = (siblingsInRow - 1) * this.config.tree.minPersonSpacing;
      const startX = -rowWidth / 2;
      const x = startX + (col * this.config.tree.minPersonSpacing);
      const y = row * (this.config.person.height + 20);
      
      person.style.transform = `translate(${x}px, ${y}px)`;
      person.classList.add('sibling');
    });
  }
  
  /**
   * Apply new positions with staggered animations
   */
  async applyNewPositions() {
    const allPeople = this.treeContainer.querySelectorAll('.person-box');
    
    allPeople.forEach((person, index) => {
      person.classList.add('repositioning');
      person.style.setProperty('--position-index', index);
    });
    
    return new Promise(resolve => {
      setTimeout(resolve, this.config.tree.rearrangeDuration + (allPeople.length * this.config.tree.staggerDelay));
    });
  }
  
  /**
   * Update connection lines
   */
  async updateConnectionLines() {
    // Clear existing lines
    this.connectionsContainer.innerHTML = '';
    this.connectionLines = [];
    
    // Create marriage lines
    this.createMarriageLines();
    
    // Create parent-child lines
    this.createParentChildLines();
    
    // Create sibling connector lines
    this.createSiblingConnectorLines();
  }
  
  /**
   * Create marriage lines
   */
  createMarriageLines() {
    const marriedPeople = this.treeContainer.querySelectorAll('.person-box.married');
    const processedCouples = new Set();
    
    marriedPeople.forEach(person => {
      const relationships = JSON.parse(person.dataset.relationships || '{}');
      const spouseId = relationships.spouse;
      
      if (spouseId) {
        const coupleKey = [person.dataset.personId, spouseId].sort().join('-');
        
        if (!processedCouples.has(coupleKey)) {
          const spouse = this.treeContainer.querySelector(`[data-person-id="${spouseId}"]`);
          if (spouse) {
            this.createMarriageLine(person, spouse);
            processedCouples.add(coupleKey);
          }
        }
      }
    });
  }
  
  /**
   * Create a marriage line between spouses
   */
  createMarriageLine(spouse1, spouse2) {
    const rect1 = spouse1.getBoundingClientRect();
    const rect2 = spouse2.getBoundingClientRect();
    const canvasRect = this.treeContainer.getBoundingClientRect();
    
    const line = document.createElement('div');
    line.className = 'connection-line marriage';
    
    const x1 = rect1.right - canvasRect.left;
    const x2 = rect2.left - canvasRect.left;
    const y = rect1.top + rect1.height / 2 - canvasRect.top;
    
    line.style.left = `${Math.min(x1, x2)}px`;
    line.style.top = `${y}px`;
    line.style.width = `${Math.abs(x2 - x1)}px`;
    
    this.connectionsContainer.appendChild(line);
    this.connectionLines.push(line);
  }
  
  /**
   * Create parent-child lines
   */
  createParentChildLines() {
    this.people.forEach((person, personId) => {
      const relationships = JSON.parse(person.element.dataset.relationships || '{}');
      
      if (relationships.parents && relationships.parents.length > 0) {
        relationships.parents.forEach(parentId => {
          const parentPerson = this.people.get(parentId);
          if (parentPerson) {
            this.createParentChildLine(parentPerson.element, person.element);
          }
        });
      }
    });
  }
  
  /**
   * Create parent-child line
   */
  createParentChildLine(parent, child) {
    const parentRect = parent.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    const canvasRect = this.treeContainer.getBoundingClientRect();
    
    const line = document.createElement('div');
    line.className = 'connection-line parent-child';
    
    const parentCenterX = parentRect.left + parentRect.width / 2 - canvasRect.left;
    const childCenterX = childRect.left + childRect.width / 2 - canvasRect.left;
    const startY = parentRect.bottom - canvasRect.top;
    const endY = childRect.top - canvasRect.top;
    
    line.style.left = `${parentCenterX}px`;
    line.style.top = `${startY}px`;
    line.style.height = `${endY - startY}px`;
    
    this.connectionsContainer.appendChild(line);
    this.connectionLines.push(line);
  }
  
  /**
   * Create sibling connector lines
   */
  createSiblingConnectorLines() {
    this.familyUnits.forEach((members, familyUnitId) => {
      const siblings = members.filter(person => person.classList.contains('sibling'));
      
      if (siblings.length > 1) {
        this.createSiblingConnectorLine(siblings);
      }
    });
  }
  
  /**
   * Create sibling connector line
   */
  createSiblingConnectorLine(siblings) {
    if (siblings.length < 2) return;
    
    const rects = siblings.map(s => s.getBoundingClientRect());
    const canvasRect = this.treeContainer.getBoundingClientRect();
    
    const leftmostX = Math.min(...rects.map(r => r.left + r.width / 2));
    const rightmostX = Math.max(...rects.map(r => r.left + r.width / 2));
    const y = rects[0].top - 40;
    
    const line = document.createElement('div');
    line.className = 'connection-line sibling-horizontal';
    
    line.style.left = `${leftmostX - canvasRect.left}px`;
    line.style.top = `${y - canvasRect.top}px`;
    line.style.width = `${rightmostX - leftmostX}px`;
    
    this.connectionsContainer.appendChild(line);
    this.connectionLines.push(line);
  }
  
  /**
   * Center tree view
   */
  centerTreeView() {
    const allPeople = this.treeContainer.querySelectorAll('.person-box');
    if (allPeople.length === 0) return;
    
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    
    allPeople.forEach(person => {
      const rect = person.getBoundingClientRect();
      minX = Math.min(minX, rect.left);
      maxX = Math.max(maxX, rect.right);
      minY = Math.min(minY, rect.top);
      maxY = Math.max(maxY, rect.bottom);
    });
    
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    
    // Update tree center variables
    this.config.tree.centerX = centerX;
    this.config.tree.centerY = centerY;
    
    document.documentElement.style.setProperty('--tree-center-x', `${centerX}px`);
    document.documentElement.style.setProperty('--tree-center-y', `${centerY}px`);
  }
  
  /**
   * Utility functions
   */
  
  waitForElement(selector, timeout = 10000) {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }
      
      const observer = new MutationObserver((mutations, obs) => {
        const element = document.querySelector(selector);
        if (element) {
          obs.disconnect();
          resolve(element);
        }
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      
      setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Element ${selector} not found within ${timeout}ms`));
      }, timeout);
    });
  }
  
  getOrCreateElement(parent, tagName, className) {
    let element = parent.querySelector(`.${className}`);
    if (!element) {
      element = document.createElement(tagName);
      element.className = className;
      parent.appendChild(element);
    }
    return element;
  }
  
  updateResponsiveConfig() {
    const width = window.innerWidth;
    
    if (width <= 768) {
      this.config.sidebar.width = Math.min(width - 32, 400);
      this.config.sidebar.rightOffset = 16;
      this.config.person.width = 140;
      this.config.person.height = 70;
    } else if (width <= 1200) {
      this.config.sidebar.width = 380;
      this.config.sidebar.rightOffset = 16;
      this.config.person.width = 160;
      this.config.person.height = 80;
    } else {
      this.config.sidebar.width = 440;
      this.config.sidebar.rightOffset = 24;
      this.config.person.width = 200;
      this.config.person.height = 100;
    }
  }
  
  setupTreeInteractions(treeCanvas) {
    let isDragging = false;
    let lastX, lastY;
    let scale = 1;
    
    // Pan functionality
    treeCanvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      treeCanvas.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      
      const currentTransform = treeCanvas.style.transform || 'translate(0px, 0px) scale(1)';
      const match = currentTransform.match(/translate\(([^,]+),\s*([^)]+)\)/);
      
      const currentX = match ? parseFloat(match[1]) : 0;
      const currentY = match ? parseFloat(match[2]) : 0;
      
      treeCanvas.style.transform = `translate(${currentX + deltaX}px, ${currentY + deltaY}px) scale(${scale})`;
      
      lastX = e.clientX;
      lastY = e.clientY;
    });
    
    document.addEventListener('mouseup', () => {
      isDragging = false;
      treeCanvas.style.cursor = 'grab';
    });
    
    // Zoom functionality
    treeCanvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      
      const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
      scale = Math.max(0.1, Math.min(3, scale * zoomFactor));
      
      const currentTransform = treeCanvas.style.transform || 'translate(0px, 0px) scale(1)';
      const match = currentTransform.match(/translate\(([^,]+),\s*([^)]+)\)/);
      
      const currentX = match ? parseFloat(match[1]) : 0;
      const currentY = match ? parseFloat(match[2]) : 0;
      
      treeCanvas.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
    });
  }
  
  isMarriedCouple(person1, person2) {
    const rel1 = JSON.parse(person1.dataset.relationships || '{}');
    const rel2 = JSON.parse(person2.dataset.relationships || '{}');
    
    return rel1.spouse === person2.dataset.personId || rel2.spouse === person1.dataset.personId;
  }
  
  generateId() {
    return 'person_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }
  
  /**
   * Public API methods
   */
  
  // Manual trigger for sidebar fix
  applySidebarFix() {
    console.log('🔧 Manual sidebar fix triggered');
    this.applyPerfectSidebarFix();
  }
  
  // Manual trigger for tree rearrangement
  triggerRearrangement() {
    console.log('🔄 Manual tree rearrangement triggered');
    this.rearrangeTree();
  }
  
  // Get system status
  getStatus() {
    return {
      initialized: this.isInitialized,
      sidebarFound: !!this.sidebar,
      treeContainerFound: !!this.treeContainer,
      peopleCount: this.people.size,
      generationsCount: this.generations.size,
      isRearranging: this.isRearranging
    };
  }
  
  // Destroy system
  destroy() {
    console.log('🗑️ Destroying UAE Roots System...');
    
    if (this.sidebarObserver) {
      this.sidebarObserver.disconnect();
    }
    
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    
    // Clear timeouts
    if (this.sidebarFixTimeout) {
      clearTimeout(this.sidebarFixTimeout);
    }
    
    this.isInitialized = false;
  }
}

/**
 * AUTO-INITIALIZATION
 * ==================
 * The system automatically initializes when the DOM is ready
 */

let uaeRootsSystem = null;

function initializeUAERootsSystem() {
  if (!uaeRootsSystem) {
    uaeRootsSystem = new UAERootsCompleteSystem();
    
    console.log('🌟 UAE Roots Complete System is now active!');
    console.log('🎯 Sidebar will be perfectly sized using your exact working fix!');
    console.log('🌳 Family tree will automatically rearrange when people are added!');
  }
  
  return uaeRootsSystem;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeUAERootsSystem);
} else {
  initializeUAERootsSystem();
}

// Also watch for sidebar appearing dynamically
const systemWatcher = new MutationObserver(() => {
  if (document.querySelector('.uae-roots-sidebar') && !uaeRootsSystem?.isInitialized) {
    console.log('📍 Sidebar detected, initializing system...');
    setTimeout(initializeUAERootsSystem, 100);
  }
});

systemWatcher.observe(document.body, {
  childList: true,
  subtree: true
});

/**
 * GLOBAL API EXPOSURE
 * ===================
 * Make the system available globally for manual control and debugging
 */

window.uaeRootsSystem = uaeRootsSystem;
window.initializeUAERootsSystem = initializeUAERootsSystem;

/**
 * USAGE EXAMPLES:
 * ==============
 * 
 * // The system automatically handles:
 * ✅ Perfect sidebar sizing using your exact working fix
 * ✅ Automatic tree rearrangement when people are added
 * ✅ Professional connection lines between family members
 * ✅ Responsive design across all devices
 * ✅ Interactive person action buttons
 * ✅ Form-based person addition in sidebar
 * 
 * // Manual controls (if needed):
 * window.uaeRootsSystem.applySidebarFix();
 * window.uaeRootsSystem.triggerRearrangement();
 * 
 * // Add people programmatically:
 * await window.uaeRootsSystem.addPerson({
 *   id: 'ahmed_123',
 *   name: 'أحمد محمد',
 *   gender: 'male',
 *   birthYear: 1980
 * }, 0, 'main');
 * 
 * // Check system status:
 * console.log(window.uaeRootsSystem.getStatus());
 */

// Export for module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { UAERootsCompleteSystem, initializeUAERootsSystem };
}